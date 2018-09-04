import * as React from 'react';
import Rate from './Rate';
import * as styles from './Rate.scss';

interface IProps {
  readonly currency: string,
  readonly rate: number,
}

const RateWithHeader = Rate('Sell');

const SellRate = (props: IProps) => (
  <div className={styles.sellRate}>
    <RateWithHeader {...props} />
  </div>
);

export default SellRate;
