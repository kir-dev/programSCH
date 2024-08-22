import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { EventModel } from '@/api/model/event.model';
import { CreateEvent } from '@/app/events/types/createEvent';
import { API_HOST } from '@/util/environment';

export const useCreateEventMutation = () => {
  return useMutation<EventModel, Error, CreateEvent>({
    mutationFn: async (event: CreateEvent) => (await axios.post(`${API_HOST}/events`, event)).data,
  });
};
