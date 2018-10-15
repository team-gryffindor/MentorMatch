import React from 'react';
import { Elements } from 'react-stripe-elements';

import CardForm from './CardForm.jsx';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px'
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({ elementFontSize: '14px' });
      } else if (window.innerWidth >= 450 && this.state.elementFontSize !== '18px') {
        this.setState({ elementFontSize: '18px' });
      }
    });
  }

  render() {
    return (
      <div className="Checkout">
        <h5>Automated Payment</h5>
        <Elements>
          <CardForm
            fontSize={elementFontSize}
            userCompletedPayment={userCompletedPayment}
            lesson={lesson}
          />
        </Elements>
      </div>
    );
  }
}

export default Checkout;
