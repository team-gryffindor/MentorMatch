import React from 'react';
import { Elements } from 'react-stripe-elements';
import { Redirect } from 'react-router-dom';
import CardForm from './CardForm.jsx';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
      redirect: false
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({ elementFontSize: '14px' });
      } else if (window.innerWidth >= 450 && this.state.elementFontSize !== '18px') {
        this.setState({ elementFontSize: '18px' });
      }
    });
  }

  redirectToCalendar = () => {
    this.setState({
      redirect: true
    })
  }

  render() {
    let { elementFontSize, redirect } = this.state;
    let { userCompletedPayment, lesson } = this.props;
    return (
      <div>
    {redirect ?   
      <Redirect to='/calendar' /> 
     :
      <div className="Checkout">
        <h5>Automated Payment</h5>
        <Elements>
          <CardForm 
            redirectToCalendar={this.redirectToCalendar}
            fontSize={elementFontSize}
            userCompletedPayment={userCompletedPayment}
            lesson={lesson}
          />
        </Elements>
      </div> 
     }
      </div>
    );
  }
}

export default Checkout;
