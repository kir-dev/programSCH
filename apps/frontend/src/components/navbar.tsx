import Image from 'next/image';

import styles from '@/app/globals.module.css';

import Icon from './icon';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className='flex'>
        <div className={styles['logo-container']}>
          <Image src='/logo.png' alt='Logo' width={50} height={50} title='by KirDev' />
        </div>
        <div className='font-bold text-3xl no-underline text-gray-900 text-center mt-1'>
          <a href='/home' title='Kezdőlap'>
            ProgramSCH
          </a>
        </div>
      </div>
      <div className='flex'>
        <Icon href='./pages/newEvent.tsx' src='/new.png' alt='Új' title='Új esemény' />
        <Icon href='' src='/profile.png' alt='Profil' title='Profil' />
      </div>
    </nav>
  );
}

export default Navbar;
