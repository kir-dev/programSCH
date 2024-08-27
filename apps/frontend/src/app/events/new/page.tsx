'use client';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { redirect } from 'next/navigation';

import { useCreateEventMutation } from '@/api/hooks/eventMutationHooks';
import { Color, EventModel, Status } from '@/api/model/event.model';
import { CreateEvent, CreateEventForm } from '@/app/events/types/createEvent';
import { styles } from '@/components/newEventStyles';
import { FRONTEND_HOST } from '@/util/environment';
import { useForm } from 'react-hook-form';

export default function newEvent() {
  const { mutate: createEvent } = useCreateEventMutation();
  const publishEvent = (formData: CreateEvent) => {
    createEvent(formData, {
      onSuccess: (event: EventModel) => {
        redirect(`${FRONTEND_HOST}/events/${event.id}`);
      },
    });
  };

  const form = useForm<CreateEventForm>({
    defaultValues: {
      tags: [],
      date: new Date(),
      color: Color.RED,
    },
    mode: 'all',
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    resetField,
    formState: { errors, isValid, isSubmitted },
  } = form;

  const onSubmit = handleSubmit((data: CreateEventForm) => {
    const formData: CreateEvent = {
      name: data.name,
      description: data.description,
      date: data.date,
      location: data.location,
      tags: data.tags,
      color: data.color,
      link: data.link,
      ownerId: 'bearni03',
      status: Status.SUBMITTED,
    };
    publishEvent(formData);
  });

  return (
    <div>
      <div>
        <div className='items-center rounded-2xl border-2 border-dark-green ml-2.5 mt-4 w-1/4 text-2xl text-center font-semibold bg-light-green p-2'>
          Event létrehozása
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Név:
            <FormControl>
              <Input
                type='text'
                style={styles.InputStyle}
                {...register('name', {
                  required: { value: true, message: 'Név megadása kötelező!' },
                  maxLength: { value: 100, message: 'Név túl hosszú!' },
                })}
                placeholder='Gólyakocsma...'
              />
              {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
            </FormControl>
          </div>

          <div style={styles.StickerStyle} className='p-3'>
            Szín:
          </div>
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Helyszín:
            <FormControl>
              <Input
                type='text'
                style={styles.InputStyle}
                {...register('location', {
                  required: { value: true, message: 'Helyszín megadása kötelező!' },
                  maxLength: { value: 30, message: 'Helyszínleírás túl hosszú!' },
                })}
                placeholder='SCH FNT...'
              />
              {errors.location && <FormErrorMessage>{errors.location.message}</FormErrorMessage>}
            </FormControl>
          </div>
          <div style={styles.StickerStyle}>
            Tagek:
            <Input id='tags' placeholder='#gólyák, ...' />
          </div>
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Időpont:
            <FormControl>
              <Input
                type='datetime-local'
                style={styles.InputStyle}
                {...register('date', {
                  required: { value: true, message: 'Időpont megadása kötelező!' },
                })}
              />
              {errors.date && <FormErrorMessage>{errors.date.message}</FormErrorMessage>}
            </FormControl>
          </div>
          <div style={styles.StickerStyle}>
            Szervezők:
            <Input id='organizers' placeholder='Kir Dev, ...' />
          </div>
        </div>
        <div className='rounded-2xl border-2 border-dark-green ml-10 mt-6 w-11/12 text-xl bg-light-green p-2 pl-3 h-64'>
          Leírás:
          <div className='mt-1 h-48 mr-1'>
            <input id='description' placeholder='...' className='h-48' style={styles.InputStyle} />
          </div>
        </div>
        <div className='flex justify-between ml-10 mt-7 w-11/12'>
          <Button type='button'>Piszkozat mentése</Button>
          <Button type='button'>Létrehozás </Button>
        </div>
      </div>
    </div>
  );
}
