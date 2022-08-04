import classNames from 'classnames';

export default function DeleteButton({ onClick, className: customClassName }) {
  const className = classNames(customClassName);

  return (
    <button className={className} onClick={onClick}>
      ⓧ
    </button>
  );
}
