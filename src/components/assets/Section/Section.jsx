import styles from './Section.module.css';

const Section = ({ css = '', children }) => {
  return <section className={css ? styles[css] : css}>{children}</section>;
};

export default Section;
