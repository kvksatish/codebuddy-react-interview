import { useState } from 'react';

const Form3 = ({ fphoneno, fconcode, setformno }) => {
  const [formData, setFormData] = useState({
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  });

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: inputValue }));
  };

  const { countryCode, phoneNumber, acceptTermsAndCondition } = formData;

  const isCountryCodeValid = ['+91', '+1'].includes(countryCode);
  const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber);
  const isFormValid = isCountryCodeValid && isPhoneNumberValid && acceptTermsAndCondition;

  const handleSubmit = event => {
    event.preventDefault();
    //  console.log(formData);
    fphoneno(formData.phoneNumber);
    fconcode(formData.countryCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="countryCode">Country Code *</label>
        <select
          id="countryCode"
          name="countryCode"
          value={countryCode}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {!isCountryCodeValid && <span>Please select a valid country code.</span>}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number *</label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
        />
        {!isPhoneNumberValid && <span>Please enter a valid 10-digit phone number.</span>}
      </div>
      <div>
        <label htmlFor="acceptTermsAndCondition">
          <input
            id="acceptTermsAndCondition"
            type="checkbox"
            name="acceptTermsAndCondition"
            checked={acceptTermsAndCondition}
            onChange={handleInputChange}
          />
          I accept the terms and conditions *
        </label>
        {!acceptTermsAndCondition && <span>Please accept the terms and conditions.</span>}
      </div>
      <button
        type="button"
        onClick={() => {
          setformno(1);
        }}
      >
        Back
      </button>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>

      <button type="button" disabled>
        Submit & Next
      </button>
    </form>
  );
};

export default Form3;
