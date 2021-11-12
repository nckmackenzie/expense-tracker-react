import { numberWithCommas } from '../../lib/comma';
import classes from './Item.module.css';
function Item({ description, amount }) {
  const borderClass =
    amount > 0 ? classes['item-income'] : classes['item-expense'];

  return (
    <li className={`${classes.item} ${borderClass}`}>
      <p>{description}</p>
      <p>{numberWithCommas(amount.toFixed(2))}</p>
    </li>
  );
}

export default Item;
