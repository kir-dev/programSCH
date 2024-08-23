'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { EventDetails } from '@/app/events/types/eventDetails';
import { API_HOST } from '@/util/environment';
import { EventModel } from '@/api/model/event.model';

export const useFetchEventDetailsQuery = (eventId: string) => {
  return useQuery<EventDetails>({
    queryKey: ['fetchEventDetails', eventId],
    queryFn: async () => (await axios.get<EventDetails>(`${API_HOST}/events/${eventId}`)).data,
  });
};

export const useFetchEventListQuery = () => {
  return useQuery<EventModel[]>({
    queryKey: ['fetchEventList'],
    queryFn: async () => (await axios.get<EventModel[]>(`${API_HOST}/events`)).data,
  });
};
