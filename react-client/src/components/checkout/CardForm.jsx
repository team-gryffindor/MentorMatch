// import React from 'react';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';

// import { CardNumberElement,
//         CardExpiryElement,
//         CardCVCElement,
//         PostalCodeElement, 
//         injectStripe 
//       } from 'react-stripe-elements';

//       const handleBlur = () => {
//         console.log('[blur]');
//       };
//       const handleChange = (change) => {
//         console.log('[change]', change);
//       };
//       const handleClick = () => {
//         console.log('[click]');
//       };
//       const handleFocus = () => {
//         console.log('[focus]');
//       };
//       const handleReady = () => {
//         console.log('[ready]');
//       };

//       const createOptions = (fontSize, padding) => {
//         return {
          
//             iconStyle: 'solid',
//             style: {
//               base: {
//                 iconColor: '#8898AA',
//                 color: 'white',
//                 lineHeight: '36px',
//                 color: '#0078e0',
//                 fontWeight: 300,
//                 fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//                 fontSize: '19px',
          
//                 '::placeholder': {
//                   color: '#8898AA',
//                 },
//               },
//               invalid: {
//                 iconColor: '#e85746',
//                 color: '#e85746',
//               }
//             },
//             classes: {
//               focus: 'is-focused',
//               empty: 'is-empty',
//             },
//           }
//         };
    
        
      

// class _SplitForm extends React.Component {
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (this.props.stripe) {
//       this.props.stripe
//         .createToken()
//         .then(payload => {
//           console.log(payload.token.id)
//           console.log('this is lesson', this.props.lesson)
//           axios.post("/charge", {
//             // stripeEmail: 'arjun. logeswaran121@gmail.com',
//             stripePrice: this.props.lesson.price,
//             stripeToken: payload.token.id
//           })
//           .then((response) => {
//             this.props.redirectToCalendar()
//           })
//           .then(() => {
//             this.props.userCompletedPayment(true);
//             alert(`You just paid ${this.props.lesson.provider.name} $${this.props.lesson.price}!`);
//           })
//           .catch((err) => {
//             console.error('Error in handlePaymentSubmit/cardForm', err);
//             alert('Something went wrong with your payment, please try again!')
//           })

//         })
//         .catch((err) => {
//           console.error('Error in submitPayment, final catch', err)
//         })
//     } else {
//       console.log("Stripe.js hasn't loaded yet.");
//     }
//   };

  
  
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} id="payment-form" className="cardForm">
//       <div >
//         <label>
//           Card number
//           <div >
//           <CardNumberElement 
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//           </div>
//         </label>
   
//         <label>
//           Expiration date
//           <div >
//           <CardExpiryElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//           </div>
//         </label>
   
//         <label>
//           CVC
//           <div >
//           <CardCVCElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//           </div>
//         </label>
   
//         <label>
//           Postal code
//           <div >
//           <PostalCodeElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//           </div>
//         </label>
//         <br/>
//         <button>Pay</button>
//         </div>
//       </form>
//     );
//   }
// }
// const SplitForm = injectStripe(_SplitForm);
// export default SplitForm

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
                iconColor: '#8898AA',
                color: 'white',
                lineHeight: '36px',
                color: '#0078e0',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '19px',
          
                '::placeholder': {
                  color: '#8898AA',
                },
              },
              invalid: {
                iconColor: '#e85746',
                color: '#e85746',
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
          console.log(payload.token.id)
          console.log('this is lesson', this.props.lesson)
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
  
    <Modal visible={this.state.visible} width="500" height="500" effect="fadeInUp" onClickAway={() => this.closeModal()}>
        <div className="container" >
            
      <h3>Mentor Match Automated Payment...by Stripe</h3>
      
  
      <form onSubmit={this.handleSubmit} id="payment-form" className="cardForm">
      <div >
      <div className="form-group">
        <label>
          Card number
          <CardNumberElement 
            className="form-control"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Expiration date
          <CardExpiryElement
            className="form-control"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          CVC
          <CardCVCElement
            className="form-control"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Postal code
          <PostalCodeElement
            className="form-control"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        </div>
        <br/>
        <a href="javascript:void(0);" onClick={() => this.closeModal()}><button>Pay</button></a>
        </div>
      </form>
        </div>
    </Modal>
  </section>
    );
  }
}
const SplitForm = injectStripe(_SplitForm);
export default SplitForm