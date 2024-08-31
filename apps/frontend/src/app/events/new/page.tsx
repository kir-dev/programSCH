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
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactTags from 'react-tag-input/types/components/ReactTags';
import { TagsInput } from 'react-tag-input-component';

import { useCreateEventMutation } from '@/api/hooks/eventMutationHooks';
import { Color, EventModel, Status } from '@/api/model/event.model';
import { CreateEvent, CreateEventForm } from '@/app/events/types/createEvent';
import { styles } from '@/components/newEventStyles';
import { FRONTEND_HOST } from '@/util/environment';

export default function newEvent() {
  const { mutate: createEvent } = useCreateEventMutation();
  const publishEvent = (formData: CreateEvent) => {
    createEvent(formData, {
      onSuccess: (event: EventModel) => {
        redirect(`${FRONTEND_HOST}/events/${event.id}`);
      },
      onError: (e: Error) => {
        throw e;
      },
    });
  };

  const form = useForm<CreateEventForm>({
    defaultValues: {
      tags: [],
      organizerIds: [],
      date: new Date(),
      color: Color.RED,
      link: '',
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

  const onPublish = handleSubmit((data: CreateEventForm) => {
    const formData: CreateEvent = {
      name: data.name,
      description: data.description,
      date: new Date(data.date).toISOString(),
      location: data.location,
      tags: tags,
      color: data.color,
      link: data.link,
      ownerId: 'bearni03',
      organizerIds: data.organizerIds,
      status: Status.SUBMITTED,
    };
    console.log(formData);
    publishEvent(formData);
  });

  const onSaveDraft = handleSubmit((data: CreateEventForm) => {
    const formData: CreateEvent = {
      name: data.name,
      description: data.description,
      date: new Date(data.date).toISOString(),
      location: data.location,
      tags: tags,
      color: data.color,
      link: data.link,
      ownerId: 'bearni03',
      organizerIds: organizerIds,
      status: Status.CREATED,
    };
    publishEvent(formData);
  });

  const [tags, setTags] = useState<string[]>([]);
  const [organizerIds, setOrganizerIds] = useState<string[]>([]);

  return (
    <div>
      <div>
        <div className='items-center rounded-2xl border-2 border-dark-green ml-2.5 mt-4 w-1/4 text-2xl text-center font-semibold bg-light-green p-2'>
          Event létrehozása
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Név:
            <FormControl isInvalid={Boolean(errors.name)} isRequired>
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
            <FormControl>
              <Input type='color' className='align-middle' {...register('color', {})} />
              {errors.color && <FormErrorMessage>{errors.color.message}</FormErrorMessage>}
            </FormControl>
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
            <TagsInput value={tags} onChange={setTags} name='tags' placeHolder='Enter tags' />
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
                  //required: { value: true, message: 'Időpont megadása kötelező!' },
                })}
              />
              {errors.date && <FormErrorMessage>{errors.date.message}</FormErrorMessage>}
            </FormControl>
          </div>
          <div style={styles.StickerStyle}>
            Szervezők:
            <TagsInput value={organizerIds} onChange={setOrganizerIds} name='organizerIds' placeHolder='bearni03' />
          </div>
        </div>
        <div className='rounded-2xl border-2 border-dark-green ml-10 mt-6 w-11/12 text-xl bg-light-green p-2 pl-3 h-64'>
          Leírás:
          <div className='mt-1 h-48 mr-1'>
            <FormControl isInvalid={Boolean(errors.description)} isRequired>
              <Input
                type='text'
                style={styles.InputStyle}
                className='h-48'
                {...register('description', { required: 'Leírás megadása kötelező!' })}
                placeholder='...'
              />
            </FormControl>
          </div>
        </div>
        <div className='flex justify-between ml-10 mt-7 w-11/12'>
          <Button
            className='rounded-2xl border-4 border-dark-green text-xl bg-light-green p-2 w-60 text-center'
            onClick={() => {
              onSaveDraft();
            }}
          >
            Piszkozat mentése
          </Button>
          <Button
            className='rounded-2xl border-4 border-dark-green text-xl bg-light-green p-2 w-60 text-center'
            onClick={() => {
              onPublish();
            }}
          >
            Létrehozás
          </Button>
        </div>
      </div>
    </div>
  );
}
