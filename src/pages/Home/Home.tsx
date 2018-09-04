import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../app/store/storeTypes';
import CurrencyPair from '../../common/components/CurrencyPair/CurrencyPair';
import * as styles from './Home.scss';
import { updatePairs } from './homeActions';
import { REFRESH_TIME } from './homeConstants';
import { mapPairs } from './homeHelpers';
import { selectCurrencyPairs } from './homeSelectors';
import { HomeStateType } from './homeTypes';

interface IReduxProps {
  currencyPairs: HomeStateType,
}

interface IReduxDispatchedProps {
  readonly updatePairs: typeof updatePairs,
}

type Props = IReduxProps & IReduxDispatchedProps;

class Home extends React.PureComponent<Props> {
  public componentDidMount() {
    this.randomlyUpdatePairs();
  }

  public render() {
    const { currencyPairs } = this.props;
    return (
      <main className={styles.home}>
        {currencyPairs.map((pair, index) => <CurrencyPair key={index} {...pair} />)}
      </main>
    );
  }

  private randomlyUpdatePairs() {
    setTimeout(() => {
      const { updatePairs: update, currencyPairs } = this.props;
      update(currencyPairs.map(mapPairs));
      this.randomlyUpdatePairs();
    }, REFRESH_TIME);
  }
}

const mapStateToProps = (state: IState): IReduxProps => ({
  currencyPairs: selectCurrencyPairs(state),
});

const dispatchActions: IReduxDispatchedProps = {
  updatePairs,
};

export default connect(mapStateToProps, dispatchActions)(Home);
