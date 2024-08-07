import { styles } from '@/components/newEventStyles';

export default function newEvent() {
  return (
    <div>
      <div>
        <div className='items-center rounded-2xl border-4 border-dark-green ml-2.5 mt-4 w-80 text-2xl text-center bg-light-green p-2'>
          Event létrehozása
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Név:
            <div className='w-3/4'>
              <input id='name' placeholder='Gólyakocsma...' style={styles.InputStyle} />
            </div>
          </div>
          <div style={styles.StickerStyle} className='p-3'>
            Szín:
          </div>
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Helyszín:
            <div className='w-3/4'>
              <input id='place' placeholder='SCH FNT...' style={styles.InputStyle} />
            </div>
          </div>
          <div style={styles.StickerStyle}>
            Tagek:
            <div className='w-3/4'>
              <input id='tags' placeholder='#gólyák, ...' style={styles.InputStyle} />
            </div>
          </div>
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Időpont:
            <div className='w-3/4'>
              <input id='time' placeholder='éééé.hh.nn. óó:pp' style={styles.InputStyle} />
            </div>
          </div>
          <div style={styles.StickerStyle}>
            Szervezők:
            <div className='w-3/4'>
              <input id='organizers' placeholder='Kir Dev, ...' style={styles.InputStyle} />
            </div>
          </div>
        </div>
        <div className='rounded-2xl border-2 border-dark-green ml-10 mt-6 w-11/12 text-xl bg-light-green p-2 pl-3 h-64'>
          Leírás:
          <div className='mt-1 h-48 mr-1'>
            <input id='description' placeholder='...' className='h-48' style={styles.InputStyle} />
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
