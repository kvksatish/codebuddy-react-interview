import { useState } from 'react';

const Form2 = ({ ffirstname, flastname, faddress, setformno }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const { firstName, lastName, address } = formData;

  const isFirstNameValid =
    firstName.length >= 2 && firstName.length <= 50 && /^[A-Za-z]+$/.test(firstName);
  const isLastNameValid = lastName === '' || /^[A-Za-z]+$/.test(lastName);
  const isAddressValid = address.length >= 10;

  const isFormValid = isFirstNameValid && isLastNameValid && isAddressValid;

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(formData);
    flastname(formData.lastName);
    ffirstname(formData.firstName);
    faddress(formData.address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name *</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
        {!isFirstNameValid && <span>First name must be between 2 and 50 alphabets.</span>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
        {!isLastNameValid && <span>Last name must contain only alphabets.</span>}
      </div>
      <div>
        <label htmlFor="address">Address *</label>
        <textarea id="address" name="address" value={address} onChange={handleInputChange} />
        {!isAddressValid && <span>Address must be at least 10 characters.</span>}
      </div>
      <button
        type="button"
        onClick={() => {
          setformno(0);
        }}
      >
        Back
      </button>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>

      <button
        type="button"
        onClick={e => {
          handleSubmit(e);
          setformno(2);
        }}
        disabled={!isFormValid}
      >
        Submit & Next
      </button>
    </form>
  );
};

export default Form2;
