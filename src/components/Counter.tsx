import { useState } from 'react';

import classes from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button className={classes.counter} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
};
