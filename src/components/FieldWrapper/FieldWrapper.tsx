import styles from './styles.module.scss';

type Props = {
  children: any;
};

const FieldWrapper = ({ children } : Props) => (
  <section className={styles.container}>
    <div className={styles.gridContainer}>{ children }</div>
  </section>
);

export default FieldWrapper;