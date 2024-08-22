'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { EventDetails } from '@/app/events/types/eventDetails';

const url = 'http://localhost:3001';

export const useFetchEventDetailsQuery = (eventId: string) => {
  return useQuery<EventDetails>({
    queryKey: ['fetchEventDetails', eventId],
    queryFn: async () => (await axios.get<EventDetails>(`http://localhost:3001/events/${eventId}`)).data,
  });
};
