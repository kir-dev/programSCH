import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDateRange, MdPeople } from 'react-icons/md';

export const EventPage = () => {
  return (
    <div className='flex'>
      <div className='relative top-0 left-0 w-1/3 m-10 p-5 border-4 border-dark-green rounded-3xl bg-light-green'>
        {/*left side*/}
        <div className='relative flex items-center justify-center w-full px-4 py-4'>
          <p className='text-5xl'>Title</p>
        </div>
        <div className='flex p-2 space-x-2 text-xl break-normal'>
          <MdOutlineDateRange className='fill-dark-green' size={25} />
          <p>Date</p>
        </div>
        <div className='flex p-2 space-x-2 text-xl'>
          <FaLocationDot className='fill-dark-green' size={25} />
          <p>Location</p>
        </div>
        <div className='flex p-6 space-x-2'>
          <div className='text-center w-20 border-2 border-text-black' style={{ background: 'grey' }}>
            tag1
          </div>
          <div className='text-center w-20 border-2 border-text-black' style={{ background: 'orange' }}>
            tag2
          </div>
        </div>
        <div className='flex p-2 space-x-2 text-xl'>
          <MdPeople className='fill-dark-green' size={25} />
          <p>Organizers</p>
        </div>
        <ul className='pl-16'>
          <li>Organizer1</li>
          <li>Organizer2</li>
          <li>Organizer3</li>
        </ul>
      </div>
      <div className='relative top-40 space-y-2 left-0 w-max p-10'>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec eleifend lectus. Integer porttitor leo
            quis porta euismod. Etiam ut libero mattis, pretium orci vel, consectetur nibh. Suspendisse sodales
            fringilla nibh, at fringilla nisi egestas tincidunt. Donec nec mi justo. Vivamus luctus neque facilisis,
            eleifend quam in, malesuada velit. In augue sapien, mattis et aliquet sed, condimentum tristique metus.
            Donec ante purus, malesuada ut leo nec, hendrerit tempor ipsum. Nullam hendrerit vehicula tincidunt. Quisque
            vel quam at elit suscipit ullamcorper. Phasellus faucibus, neque sit amet finibus varius, elit quam rhoncus
            mi, et dictum mauris quam et turpis.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In metus odio,
            convallis vel lobortis a, mattis fringilla neque. Duis lectus ante, sollicitudin ut urna aliquet, vehicula
            luctus massa. Duis in ultricies risus, et iaculis leo. Ut tempus vehicula sem, ultrices ullamcorper lacus
            vehicula at. Curabitur tempus tincidunt viverra. Morbi iaculis nulla in risus laoreet, ac porta nunc porta.
          </p>
        </div>
        <div className='relative top-52 border-2 border-dark-green bg-light-green text-2xl'>
          <div className='flex p-2 space-x-4'>
            <p>Comments</p>
            <p className='text-gray-600'>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
