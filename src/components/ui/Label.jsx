import classes from './Label.module.css';

function Label({ children }) {
  return <div className={classes.label}>{children}</div>;
}

export default Label;
