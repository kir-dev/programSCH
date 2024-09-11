'use client';

import React, { useState } from 'react';

import { styles } from '@/components/calendarStyles';

// Segédfüggvények
const daysInWeek = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];
const monthNames = [
  'Január',
  'Február',
  'Március',
  'Április',
  'Május',
  'Június',
  'Július',
  'Augusztus',
  'Szeptember',
  'Október',
  'November',
  'December',
];

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

// Calendar komponens
const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(7); // Augusztus
  const [currentYear, setCurrentYear] = useState(2024); // 2024

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      // Ha január van, lépj vissza decemberre és csökkentsd az évet
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      // Ha december van, lépj előre januárra és növeld az évet
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const days = [];

    // Üres cellák a hónap első napja előtt
    for (let i = 1; i < firstDayOfMonth; i++) {
      days.push(<div style={styles.emptyDay} key={`empty-${i}`} />);
    }

    // A hónap napjai
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div style={styles.day} key={i}>
          <div className='text-xs text-gray-700 font-bold'>{i}</div>
        </div>
      );
    }

    // Üres cellák a hónap utolsó napja után
    const totalDays = days.length;
    const remainingDays = (7 - (totalDays % 7)) % 7;
    for (let i = 0; i < remainingDays; i++) {
      days.push(<div style={styles.emptyDay} key={`empty-end-${i}`} />);
    }

    return days;
  };

  return (
    <div style={styles.calendarContainer}>
      <div style={styles.calendarHeader}>
        <button style={styles.button} onClick={handlePrevMonth}>
          {'<'}
        </button>
        <div style={styles.monthLabel}>{monthNames[currentMonth]}</div>
        <button style={styles.button} onClick={handleNextMonth}>
          {'>'}
        </button>
      </div>
      <div>
        <div style={styles.grid}>
          {daysInWeek.map((day) => (
            <div style={styles.dayName} key={day}>
              {day}
            </div>
          ))}
        </div>
        <div style={styles.grid}>{renderDays()}</div>
      </div>
    </div>
  );
};

export default Calendar;
