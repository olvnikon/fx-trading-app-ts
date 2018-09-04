import * as React from 'react';
import styles from './Rate.scss';
import { mapRate } from './rateHelpers';

interface IProps {
  readonly rate: number,
  readonly header: string,
}

const Rate = ({ rate, header }: IProps) => (
  <section className={styles.rate}>
    <header>
      {header}
    </header>
    <main>
      {mapRate(rate)}
    </main>
  </section>
);

interface IHOCProps {
  readonly currency: string,
  readonly rate: number,
}

const RateHOC = (WrappedComponent: React.ComponentType<IProps>) =>
  (title: string) =>
  ({ currency, rate }: IHOCProps) => (
      <WrappedComponent header={`${title} ${currency}`} rate={rate} />
  );

export default RateHOC(Rate);
