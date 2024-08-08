type ButtonProps = {
  type: 'button';
  label: string;
};

function Button(props: ButtonProps) {
  return (
    <div className='rounded-2xl border-4 border-dark-green text-xl bg-light-green p-2 w-60 text-center'>
      <button type={props.type}>{props.label}</button>
    </div>
  );
}

export default Button;
