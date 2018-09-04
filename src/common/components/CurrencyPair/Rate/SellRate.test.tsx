import { shallow } from 'enzyme';
import * as React from 'react';
import SellRate from './SellRate';

describe('SellRate', () => {
  const RATE = 12.345;
  const CURRENCY = 'USD';

  test('should match snapshot', () => {
    const props = {
      currency: CURRENCY,
      rate: RATE,
    };
    const component = shallow(<SellRate {...props} />);
    expect(component).toMatchSnapshot();
  });
});
