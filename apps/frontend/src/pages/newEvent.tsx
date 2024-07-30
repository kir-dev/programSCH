export default function newEvent() {
  return (
    <div>
      <div>
        <div className='rounded-2xl border-2 border-dark-green ml-2.5 mt-4 w-80 text-2xl text-center bg-light-green p-2'>
          Event létrehozása
        </div>
        <div className='flex'>
          <div className='flex justify-between rounded-2xl border-2 border-dark-green ml-10 mt-5 w-2/5 text-xl text-left bg-light-green p-2 pl-3'>
            Név:
            <div className='border-2'>
              <input id='name' placeholder='Gólyakocsma...' className='italic w-96' />
            </div>
          </div>
          <div className='flex justify-between rounded-2xl border-2 border-dark-green ml-44 mt-4 w-2/5 text-xl text-left bg-light-green p-2 pl-3'>
            Szín:
          </div>
        </div>
        <div className='flex'>
          <div className='flex justify-between rounded-2xl border-2 border-dark-green ml-10 mt-5 w-2/5 text-xl text-left bg-light-green p-2 pl-3'>
            Helyszín:
            <div className='border-2'>
              <input id='place' placeholder='SCH FNT...' className='italic w-96' />
            </div>
          </div>
          <div className='flex justify-between rounded-2xl border-2 border-dark-green ml-44 mt-5 w-2/5 text-xl text-left bg-light-green p-2 pl-3'>
            Tagek:
            <div className='border-2'>
              <input id='tags' placeholder='#gólyák, ...' className='italic w-96' />
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex justify-between rounded-2xl border-2 border-dark-green ml-10 mt-5 w-2/5 text-xl text-left bg-light-green p-2 pl-3'>
            Időpont:
            <div className='border-2'>
              <input id='time' placeholder='éééé.hh.nn.' className='italic w-96' />
            </div>
          </div>
          <div className='flex justify-between rounded-2xl border-2 border-dark-green ml-44 mt-5 w-2/5 text-xl text-left bg-light-green p-2 pl-3'>
            Szervezők:
            <div className='border-2'>
              <input id='organizers' placeholder='Kir Dev, ...' className='italic w-96' />
            </div>
          </div>
        </div>
        <div className='rounded-2xl border-2 border-dark-green ml-10 mt-10 w-11/12 text-xl text-left bg-light-green p-2 pl-3 h-64'>
          Leírás:
          <div className='mt-1 h-48 mr-1'>
            <input id='description' placeholder='...' className='border-2 italic h-48 w-full align-text-top' />
          </div>
        </div>
        <div className='flex justify-between ml-10 mt-7 w-11/12'>
          <div className='rounded-2xl border-2 border-dark-green text-xl bg-light-green p-2 w-60 text-center'>
            <button type='button'>Piszkozat mentése</button>
          </div>
          <div className='rounded-2xl border-2 border-dark-green text-xl bg-light-green p-2 w-60 text-center'>
            <button type='button'>Létrehozás</button>
          </div>
        </div>
      </div>
    </div>
  );
}
