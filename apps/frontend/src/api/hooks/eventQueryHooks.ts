'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { EventDetails } from '@/app/events/types/eventDetails';
import { API_HOST } from '@/util/environment';

export const useFetchEventDetailsQuery = (eventId: string) => {
  return useQuery<EventDetails>({
    queryKey: ['fetchEventDetails', eventId],
    queryFn: async () => (await axios.get<EventDetails>(`${API_HOST}/events/${eventId}`)).data,
  });
};
