import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { EventDetails } from '@/pages/event/types/eventDetails';

const url = 'http://localhost:3001';

export const useFetchEventDetailsQuery = (eventId: string) => {
  return useQuery<EventDetails>({
    queryKey: ['fetchEventDetails', eventId],
    queryFn: async () => (await axios.get(`${url}/events/${eventId}`)).data,
  });
};
