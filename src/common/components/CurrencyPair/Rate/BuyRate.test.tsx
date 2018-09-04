import { shallow } from 'enzyme';
import * as React from 'react';
import BuyRate from './BuyRate';

describe('BuyRate', () => {
  const RATE = 12.345;
  const CURRENCY = 'USD';

  test('should match snapshot', () => {
    const props = {
      currency: CURRENCY,
      rate: RATE,
    };
    const component = shallow(<BuyRate {...props} />);
    expect(component).toMatchSnapshot();
  });
});
