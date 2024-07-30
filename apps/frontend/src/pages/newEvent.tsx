export default function newEvent() {
  return (
    <div>
      <div>
        <div className='items-center rounded-2xl border-4 border-dark-green ml-2.5 mt-4 w-80 text-2xl text-center bg-light-green p-2'>
          Event létrehozása
        </div>
        <div className='flex items-center justify-between mt-5 ml-10 w-11/12'>
          <div className='flex items-center justify-between rounded-2xl border-2 border-dark-green w-5/12 text-xl bg-light-green p-2 pl-3'>
            Név:
            <div className='w-3/4'>
              <input id='name' placeholder='Gólyakocsma...' className='rounded-lg italic w-full p-1' />
            </div>
          </div>
          <div className='flex items-center justify-between rounded-2xl border-2 border-dark-green w-5/12 text-xl bg-light-green p-3'>
            Szín:
          </div>
        </div>
        <div className='flex items-center justify-between mt-5 ml-10 w-11/12'>
          <div className='flex items-center justify-between rounded-2xl border-2 border-dark-green w-5/12 text-xl bg-light-green p-2 pl-3'>
            Helyszín:
            <div className='w-3/4'>
              <input id='place' placeholder='SCH FNT...' className='rounded-lg italic w-full p-1' />
            </div>
          </div>
          <div className='flex items-center justify-between rounded-2xl border-2 border-dark-green w-5/12 text-xl bg-light-green p-2 pl-3'>
            Tagek:
            <div className='w-3/4'>
              <input id='tags' placeholder='#gólyák, ...' className='rounded-lg italic w-full p-1' />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mt-5 ml-10 w-11/12'>
          <div className='flex items-center justify-between rounded-2xl border-2 border-dark-green w-5/12 text-xl bg-light-green p-2 pl-3'>
            Időpont:
            <div className='w-3/4'>
              <input id='time' placeholder='éééé.hh.nn.' className='rounded-lg italic w-full p-1' />
            </div>
          </div>
          <div className='flex items-center justify-between rounded-2xl border-2 border-dark-green w-5/12 text-xl bg-light-green p-2 pl-3'>
            Szervezők:
            <div className='w-3/4'>
              <input id='organizers' placeholder='Kir Dev, ...' className='rounded-lg italic w-full p-1' />
            </div>
          </div>
        </div>
        <div className='rounded-2xl border-2 border-dark-green ml-10 mt-6 w-11/12 text-xl bg-light-green p-2 pl-3 h-64'>
          Leírás:
          <div className='mt-1 h-48 mr-1'>
            <input id='description' placeholder='...' className='rounded-lg italic h-48 w-full p-1' />
          </div>
        </div>
        <div className='flex justify-between ml-10 mt-7 w-11/12'>
          <div className='rounded-2xl border-4 border-dark-green text-xl bg-light-green p-2 w-60 text-center'>
            <button type='button'>Piszkozat mentése</button>
          </div>
          <div className='rounded-2xl border-4 border-dark-green text-xl bg-light-green p-2 w-60 text-center'>
            <button type='button'>Létrehozás</button>
          </div>
        </div>
      </div>
    </div>
  );
}
