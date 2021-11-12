import { Fragment } from 'react';
import Label from '../ui/Label';
import Item from './Item';
import classes from './ItemList.module.css';

function ItemList({ items }) {
  return (
    <Fragment>
      <Label>History</Label>
      <ul className={classes.items}>
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
}

export default ItemList;
