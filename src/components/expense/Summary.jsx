import { numberWithCommas } from '../../lib/comma';
import classes from './Summary.module.css';
function Summary({ items }) {
  let balance = 0;
  let desposits = 0;
  let withdrawals = 0;
  if (items) {
    balance = items.reduce((acc, cur) => acc + cur.amount, 0);
    desposits = items
      .filter(item => item.amount > 0)
      .reduce((acc, cur) => acc + cur.amount, 0);

    withdrawals =
      items
        .filter(item => item.amount < 0)
        .reduce((acc, cur) => acc + cur.amount, 0) * -1;
  }

  return (
    <div className={classes.summary}>
      <h4>Your Balance</h4>
      <p className={classes.balance}>{`KES.${numberWithCommas(
        balance.toFixed(2)
      )}`}</p>
      {/* <p className={classes.balance}>200</p> */}
      <div className={classes['summary-details']}>
        <div className={`${classes.info} ${classes.income}`}>
          <p>INCOME</p>
          <p className={classes.amount}>
            {items && numberWithCommas(desposits.toFixed(2))}
          </p>
        </div>
        <div className={`${classes.info} ${classes.expense}`}>
          <p>EXPENSE</p>
          <p className={classes.amount}>
            {items && numberWithCommas(withdrawals.toFixed(2))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
