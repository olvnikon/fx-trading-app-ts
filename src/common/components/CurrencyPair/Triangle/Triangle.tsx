import * as React from 'react';
import * as styles from './Triangle.scss';

interface IProps {
  readonly isPositiveTrend: boolean,
}

const Triangle = ({ isPositiveTrend }: IProps) => (
  <div className={isPositiveTrend ? styles.positive : styles.negative} />
);

export default Triangle;
