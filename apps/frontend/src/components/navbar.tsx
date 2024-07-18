import Image from 'next/image';

import styles from '@/app/globals.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className='flex'>
        <div className={styles['logo-container']}>
          <Image src='/logo.png' alt='Logo' width={50} height={50} title='by KirDev' />
        </div>
        <div className={styles['link']}>
          <a href='/' title='Kezdőlap'>
            ProgramSCH
          </a>
        </div>
      </div>
      <div className='flex'>
        <Icon href='' src='/new.png' alt='Új' title='Új esemény' />
        <Icon href='' src='/profile.png' alt='Profil' title='Profil' />
      </div>
    </nav>
  );
}

export default Navbar;

type IconProps = {
  src: string;
  href: string;
  title: string;
  alt: string;
};

function Icon(props: IconProps) {
  return (
    <div className={styles['link']}>
      <a href={props.href}>
        <Image src={props.src} alt={props.alt} width={50} height={50} title={props.title} />
      </a>
    </div>
  );
}
