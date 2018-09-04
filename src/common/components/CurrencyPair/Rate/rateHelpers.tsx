import * as React from 'react';
import { compose } from 'redux';
import styles from './Rate.scss';

const mapChunk = (chunk: string, index: number) => (
  <span
    key={index}
    className={styles[`chunk-${index + 1}`]}
  >
    {chunk}
  </span>
);
const mapChunks = (chunks: ReadonlyArray<string>) => chunks.map(mapChunk);
const splitByChunks = (value: string) => value.match(/.{1,2}/g) || ['00'];

const mapRightSide = compose(
  mapChunks,
  splitByChunks,
);

const mapLeftSide = (leftSide: string) => <span>{`${leftSide}.`}</span>;

const splitRateLeftRight = (rate: number) => rate.toString().split('.');

export const mapRate = (rate: number) => {
  const [leftSide, rightSide] = splitRateLeftRight(rate);
  return (
    <span>
      {mapLeftSide(leftSide)}
      {mapRightSide(rightSide)}
    </span>
  );
};
