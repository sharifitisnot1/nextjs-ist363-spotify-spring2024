import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({
  caption,
  children,
  intro,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  const paragraphClasses = cx({
    paragraph: true,
    intro: intro,
    caption: caption,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-Top--${marginBottom}`]: marginTop,
    [`margin-Right--${marginBottom}`]: marginRight,
    [`margin-Left--${marginBottom}`]: marginLeft,
  });
  return <p className={paragraphClasses}>{children}</p>;
};
export default Paragraph;
