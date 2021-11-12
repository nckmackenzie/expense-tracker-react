import { Fragment, useRef, useState } from 'react';
import Label from '../ui/Label';
import classes from './Form.module.css';
function Form({ onSubmit }) {
  const textInputRef = useRef();
  const amountInputRef = useRef();
  const [textValid, setTextValid] = useState(true);
  const [amountValid, setAmountValid] = useState(true);

  const submitHandler = e => {
    e.preventDefault();
    const text = textInputRef.current.value;
    const amount = amountInputRef.current.value;
    if (!text || text.trim() === '') {
      setTextValid(false);
    }

    if (!amount || amount.trim() === '') {
      setAmountValid(false);
    }

    const formIsValid = textValid && amountValid;

    if (!formIsValid) return;

    const formData = {
      description: text,
      amount,
    };

    onSubmit(formData);
    textInputRef.current.value = '';
    amountInputRef.current.value = '';
  };

  return (
    <Fragment>
      <Label>Add new transaction</Label>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={`${classes.controls} ${!textValid && classes.invalid}`}>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter description"
            ref={textInputRef}
            autoComplete="off"
          />
          {!textValid && (
            <span className={classes['invalid-feedback']}>Text required</span>
          )}
        </div>
        <div
          className={`${classes.controls} ${!amountValid && classes.invalid}`}
        >
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            ref={amountInputRef}
            autoComplete="off"
          />
          {!amountValid && (
            <span className={classes['invalid-feedback']}>Amount required</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
}

export default Form;
