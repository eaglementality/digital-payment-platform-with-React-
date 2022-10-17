
import React from 'react';
import { useFormik } from 'formik';
import '../paymentForm/form.css';
import discoverNetwork from '../paymentForm/discoverNetwork.png'
import mastercard from '../paymentForm/visacard.png'
import visacard from '../paymentForm/mastercard.png'
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      CardName: '',
      CardNumber: '',
      amount_paid : "",
      expirydate : "",
      securitycode:"",
      postalcode: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='container'>
    <div className='form-group'>
    <div className='images'>
    <img src={visacard} alt = "" />
    <img src={mastercard} alt = "" />
    <img src={discoverNetwork} alt = "" /></div>
    <form onSubmit={formik.handleSubmit} >
      <div className='form-group'>
       <label htmlFor='amount_paid'>Payment amount </label>
      <input 
      className='form-control'
      id='amount_paid' 
      type='text'
       onChange={formik.handleChange} 
      />
      </div>
      <label htmlFor="cardName">Name on card</label>
      <input
      className='form-control'
        id="CardName"
        name="CardName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.CardName}
      />
      <label htmlFor="CardNumber">Card number</label>
      <input
      className='form-control'
        id="CardNumber"
        name="CardNumber"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.CardNumber}
      />
    <div className='form-group'>
      <div className='form-row'>
      <div className='form-group col-md-6'>
      <label htmlFor="expirydate">Expiry date</label>
      <input
       className='form-control'
        id="expirydate"
        name="expirydate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.expirydate}
      />
      </div>
      <div className='form-group col-md-6'>
      <label htmlFor="Securitycode">Security code</label>
      <input
       className='form-control'
        id="securitycode"
        name="securitycode"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.securitycode}
      />
      </div>
      </div>
      </div>
      <div className='form-group'>
      <label htmlFor='ZIP/Postal code'>ZIP/postal code</label>
      <input 
      className='form-control'
      id='postalcode'
      name='postalcode'
      type='number'
        onChange={formik.handleChange}
        value = {formik.values.postalcode}
      />
      </div>
      <button className='btn btn-primary'  type="submit">Send</button>
    </form>
    </div>
    </div>
  );
};
export default SignupForm;