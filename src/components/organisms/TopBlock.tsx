import styles from './TopBlock.module.scss';

function TopBlock() {
  return (
    <section id='top' className={styles['top']}>
      <p className={styles['lead-title']}>Sua Agenda Semanal</p>
      <p className={styles['lead-sub']}>Lorem ipsum dolor ist amet.</p>
    </section>
  );
}

export default TopBlock;
