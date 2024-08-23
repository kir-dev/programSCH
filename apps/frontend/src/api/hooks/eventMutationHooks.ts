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

export const useUpdateEventMutation = (eventId: string) => {
  return useMutation<EventModel, Error, CreateEvent>({
    mutationFn: async (event: CreateEvent) => (await axios.patch(`${API_HOST}/events/${eventId}`, event)).data,
  });
};

export const useDeleteEventMutation = (onSuccess: () => void, onError: (e: Error) => void) => {
  return useMutation<EventModel, Error, string>({
    mutationFn: async (eventId: string) => (await axios.delete(`${API_HOST}/events/${eventId}`)).data,
    onSuccess,
    onError,
  });
};
