import React from 'react';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import { Redirect } from 'react-router-dom';

import { CardNumberElement,
        CardExpiryElement,
        CardCVCElement,
        PostalCodeElement, 
        injectStripe 
      } from 'react-stripe-elements';

      const handleBlur = () => {
        console.log('[blur]');
      };
      const handleChange = (change) => {
        console.log('[change]', change);
      };
      const handleClick = () => {
        console.log('[click]');
      };
      const handleFocus = () => {
        console.log('[focus]');
      };
      const handleReady = () => {
        console.log('[ready]');
      };

      const createOptions = (fontSize) => {
        return {
          
            iconStyle: 'solid',
            style: {
              base: {
                color: '#f3f7fa',
                lineHeight: '18px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                  color: '#f3f7fa'
                }
              },
              invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
              }
            },
            classes: {
              focus: 'is-focused',
              empty: 'is-empty',
            },
          }
        };
    
        
      

class _SplitForm extends React.Component {
  state = {
    visible: true
  }

  openModal() {
    this.setState({
        visible : true
    });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => {
          
          axios.post("/charge", {
            // stripeEmail: 'arjun. logeswaran121@gmail.com',
            stripePrice: this.props.lesson.price,
            stripeToken: payload.token.id
          })
          .then((response) => {
            this.props.redirectToCalendar()
          })
          .then(() => {
            this.props.userCompletedPayment(true);
            alert(`You just paid ${this.props.lesson.provider.name} $${this.props.lesson.price}!`);
          })
          .catch((err) => {
            console.error('Error in handlePaymentSubmit/cardForm', err);
            alert('Something went wrong with your payment, please try again!')
          })

        })
        .catch((err) => {
          console.error('Error in submitPayment, final catch', err)
        })
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  
  
  render() {
  return(
   
    <section>
    <Modal visible={this.state.visible}  width="500" height="375" effect="fadeInUp" onClickAway={() => this.closeModal()}>
        
    <div className="container" className="rcorners2" style={{backgroundColor: '#60aff5'}}>
      <h4>MentorMatchPayment...by Stripe</h4>
      {/* 60aff5 */}
      
    
      <form onSubmit={this.handleSubmit} id="payment-form" >
      <div className="form-row" id="card-element">
        <label for="card-element">
          Card number
          <CardNumberElement className="stripe-search-btn-width"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
      </div>
      <div className="form-row" id="card-element">
        <label for="card-element">
          Expiration date
          <CardExpiryElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
      </div>
      <div className="form-row">
        <label for="card-element">
          CVC
          <CardCVCElement className="stripe-cvc-btn-width"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
      </div>
      <div className="form-row">
        <label for="card-element">
          Postal code
          <PostalCodeElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        </div>
        <br/>
        <a href="javascript:void(0);" onClick={() => this.closeModal()}><button className="btn-outline-stripe">Submit Payment!</button></a>
      </form>
      </div>
    </Modal>
  </section>


    );
  }
}
const SplitForm = injectStripe(_SplitForm);
export default SplitForm