import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { EventModel } from '@/api/model/event.model';
import { CreateEvent } from '@/pages/event/types/createEvent';

const url = 'http://localhost:3001';

export const useCreateEventMutation = () => {
  return useMutation<EventModel, Error, CreateEvent>({
    mutationFn: async (event: CreateEvent) => (await axios.post(`${url}/events`, event)).data,
  });
};
