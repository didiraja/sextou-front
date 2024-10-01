import styles from './TopBlock.module.scss';

function TopBlock() {
  return (
    <section id='top' className={styles['top']}>
      <p className={styles['lead-title']}>Sua Agenda Semanal</p>
      <h1 className={styles['lead-sub']}>
        Os melhores Eventos do Rio de Janeiro estão aqui.
      </h1>
    </section>
  );
}

export default TopBlock;
