import { styles } from '@/components/newEventStyles';

type InputProps = {
  id: string;
  placeholder: string;
};

function Input(props: InputProps) {
  return (
    <div className='w-3/4'>
      <input id={props.id} placeholder={props.placeholder} style={styles.InputStyle} />
    </div>
  );
}

export default Input;
