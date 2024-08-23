import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useCreateEventMutation } from '@/api/hooks/eventMutationHooks';
import { Color, EventModel, Status } from '@/api/model/event.model';
import { CreateEvent, CreateEventForm } from '@/app/events/types/createEvent';
import { styles } from '@/components/newEventStyles';
import { FRONTEND_HOST } from '@/util/environment';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
  VStack,
  Stack,
} from '@chakra-ui/react';

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
          <FormControl>
            <div style={styles.StickerStyle}>
              Név:
              <Input id='name' placeholder='Gólyakocsma...' />
            </div>
          </FormControl>
          <div style={styles.StickerStyle} className='p-3'>
            Szín:
          </div>
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Helyszín:
            <Input id='place' placeholder='SCH FNT...' />
          </div>
          <div style={styles.StickerStyle}>
            Tagek:
            <Input id='tags' placeholder='#gólyák, ...' />
          </div>
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Időpont:
            <Input id='time' placeholder='éééé.hh.nn. óó:pp' />
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
