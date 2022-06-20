import styles from './styles.module.scss';

type Props = {
  value: number;
};

const Card = ({value}: Props) => {
  return (
    <div className={styles.card}>{value}</div>
  );
};

export default Card;