import * as React from 'react';
import * as styles from './CurrencyPair.scss';
import { getMainCurrency } from './currencyPairHelpers';
import { ICurrencyPair } from './currencyPairTypes';
import BuyRate from './Rate/BuyRate';
import SellRate from './Rate/SellRate';
import Triangle from './Triangle';

class CurrencyPair extends React.PureComponent<ICurrencyPair> {
  private prevBuy: number = 0;

  public render() {
    const { pair, buy, sell } = this.props;
    const isPositiveTrend = this.prevBuy < buy;
    this.prevBuy = buy;
    const currency = getMainCurrency(pair);

    return (
      <section className={styles.currencyPair}>
        <header className={styles.header}>
          <h3>{pair}</h3>
        </header>
        <main className={styles.content}>
          <SellRate rate={sell} currency={currency} />
          <Triangle isPositiveTrend={isPositiveTrend} />
          <BuyRate rate={buy} currency={currency} />
        </main>
      </section>
    );
  }
}

export default CurrencyPair;
