import React, {useRef, useState} from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const [validInput, setValidInput] = useState({
      name: true,
      mobile: true,
      street: true,
      postalCode: true,
    });

    const isEmpty = (value) => value.trim() === "";
    const sixChars = (value) => value.trim().length === 6;
    const tenChars = (value) => value.trim().length >= 10;

    const inputName = useRef();
    const inputMobile = useRef();
    const inputStreet = useRef();
    const inputPostalCode = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = inputName.current.value;
        const enteredMobile = inputMobile.current.value;
        const enteredStreet = inputStreet.current.value;
        const enteredPostalCode = inputPostalCode.current.value;

        const validNameInput = !isEmpty(enteredName);
        const validStreetInput = !isEmpty(enteredStreet);
        const validMobileInput = tenChars(enteredMobile);
        const validPostalCodeInput = sixChars(enteredPostalCode);

        setValidInput({
          name: validNameInput,
          mobile: validMobileInput,
          street: validStreetInput,
          postalCode: validPostalCodeInput,
        });

        const validData =
          validNameInput &&
          validStreetInput &&
          validMobileInput &&
            validPostalCodeInput;
        
        if (!validData) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            mobile: enteredMobile,
            street: enteredStreet,
            postalCode: enteredPostalCode
        })
    }

    const nameClassControl = `${classes.control} ${validInput.name ? "" : classes.invalid}`;
    const mobileClassControl = `${classes.control} ${validInput.mobile ? "" : classes.invalid}`;
    const streetClassControl = `${classes.control} ${validInput.street ? "" : classes.invalid}`;
    const postalCodeClassControl = `${classes.control} ${validInput.postalCode ? "" : classes.invalid}`;

    return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameClassControl}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={inputName} />
          {!validInput.name && <p>Please enter a valid name!!</p>}
        </div>
        <div className={mobileClassControl}>
          <label htmlFor="mobile">Mobile</label>
          <input type="number" id="mobile" ref={inputMobile} />
          {!validInput.mobile && <p>Please enter a valid mobile number!!</p>}
        </div>
        <div className={streetClassControl}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={inputStreet} />
          {!validInput.street && <p>Please enter a valid address!!</p>}
        </div>
        <div className={postalCodeClassControl}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={inputPostalCode} />
          {!validInput.postalCode && <p>Please enter a valid Postal Code!! (6 chars)</p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    );
}

export default Checkout;