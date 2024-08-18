'use client';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange, MdPeople } from 'react-icons/md';

import { useFetchEventDetailsQuery } from '@/api/hooks/eventQueryHooks';
import Home from '@/app/page';

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { data: event, error: e } = useFetchEventDetailsQuery(params.id!);

  /*if (e) {
    throw e;
  }*/

  if (!event) {
    return <Home />;
  }

  return (
    <div className='flex'>
      <div className='relative top-0 left-0 w-1/3 m-10 p-5 border-4 border-dark-green rounded-3xl bg-light-green'>
        {/*left side*/}
        <div className='relative flex items-center justify-center w-full px-4 py-4'>
          <p className='text-5xl'>{event?.name}</p>
        </div>
        <div className='flex p-2 space-x-2 text-xl break-normal'>
          <MdOutlineDateRange className='fill-dark-green' size={25} />
          <p>{event?.date}</p>
        </div>
        <div className='flex p-2 space-x-2 text-xl'>
          <FaLocationDot className='fill-dark-green' size={25} />
          <p>{event?.location}</p>
        </div>
        <div className='flex p-6 space-x-2'>
          {event?.tags?.map((tag, index) => {
            return (
              <div key={index} className='text-center w-20 border-2 border-text-black' style={{ background: 'grey' }}>
                tag1
              </div>
            );
          })}
        </div>
        <div className='flex p-2 space-x-2 text-xl'>
          <MdPeople className='fill-dark-green' size={25} />
          <p>Organizers</p>
        </div>
        <ul className='pl-16'>
          {event?.organizers?.map((organizer) => {
            return <li key={organizer.authSchId}>{organizer?.name}</li>;
          })}
        </ul>
      </div>
      <div className='relative top-40 space-y-2 left-0 w-max p-10'>
        <div>
          <p>{event?.description}</p>
        </div>
        <div className='relative top-52 border-2 border-dark-green bg-light-green text-2xl'>
          <div className='flex p-2 space-x-4'>
            <p>Comments</p>
            <p className='text-gray-600'>{event?.messages.length}</p>
          </div>
          {event?.messages?.map((message, index) => <p key={index}>{message}</p>)}
        </div>
      </div>
    </div>
  );
}
