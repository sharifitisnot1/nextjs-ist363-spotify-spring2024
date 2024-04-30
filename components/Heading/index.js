import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({
  children,
  level,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  const Tag = `h${level}`;

  const headingClasses = cx({
    heading: true,
    [`heading--${level}`]: level,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-Top--${marginBottom}`]: marginTop,
    [`margin-Right--${marginBottom}`]: marginRight,
    [`margin-Left--${marginBottom}`]: marginLeft,
  });

  return <Tag className={headingClasses}>{children}</Tag>;
};
export default Heading;
