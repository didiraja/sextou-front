import styles from '../Content.module.scss';

const ContentDescription = ({ description }: { description: string }) => {
  return (
    <p
      className={styles['description']}
      style={{ whiteSpace: 'pre-wrap' }}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

export default ContentDescription;
