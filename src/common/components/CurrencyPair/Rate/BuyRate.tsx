import * as React from 'react';
import Rate from './Rate';
import * as styles from './Rate.scss';

interface IProps {
  readonly currency: string,
  readonly rate: number,
}

const RateWithHeader = Rate('Buy');

const BuyRate = ({ ...props }: IProps) => (
  <div className={styles.buyRate}>
    <RateWithHeader {...props} />
  </div>
);

export default BuyRate;
