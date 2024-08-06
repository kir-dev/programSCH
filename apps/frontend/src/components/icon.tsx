import Image from 'next/image';

type IconProps = {
  src: string;
  href: string;
  title: string;
  alt: string;
};

function Icon(props: IconProps) {
  return (
    <div className='font-bold text-3xl no-underline text-gray-900 text-center mt-1'>
      <a href={props.href}>
        <Image src={props.src} alt={props.alt} width={50} height={50} title={props.title} className='ml-3 mr-3' />
      </a>
    </div>
  );
}

export default Icon;
