import Button from '@/components/button';
import Input from '@/components/input';
import { styles } from '@/components/newEventStyles';

export default function newEvent() {
  return (
    <div>
      <div>
        <div className='items-center rounded-2xl border-2 border-dark-green ml-2.5 mt-4 w-1/4 text-2xl text-center font-semibold bg-light-green p-2'>
          Event létrehozása
        </div>
        <div style={styles.AlignStyle}>
          <div style={styles.StickerStyle}>
            Név:
            <Input id='name' placeholder='Gólyakocsma...' />
          </div>
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
          <Button type='button' label='Piszkozat mentése' />
          <Button type='button' label='Létrehozás' />
        </div>
      </div>
    </div>
  );
}
