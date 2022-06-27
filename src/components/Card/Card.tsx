import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
  value: number;
  onClick: () => void;
  hideAllClass: boolean;
  isActive: boolean;
  visibleCard: boolean;
};

const Card = forwardRef<HTMLButtonElement, Props>(({value, onClick, hideAllClass, isActive, visibleCard}, ref) => {
  return (
    <button
      ref={ref}
      className={classNames(styles.card, {
        [styles.hideAllClass]: hideAllClass,
        [styles.isActive]: isActive,
        [styles.visibleCard]: visibleCard,
      })}
      disabled={!hideAllClass || visibleCard}
      onClick={onClick}
    >
      <span>{value}</span>
    </button>
  );
});


export default Card;