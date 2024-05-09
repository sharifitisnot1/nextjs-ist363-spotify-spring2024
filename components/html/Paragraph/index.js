import styles from "./Paragraph.module.scss";

const Paragraph = ({ children }) => {
 return <p className={styles.paragraph}>{children}</p>;
};
export default Paragraph;
