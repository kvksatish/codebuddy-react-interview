import { useState } from 'react';

const Form1 = ({ femail, fpassword, setformno }) => {
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const { emailId, password } = formData;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId);
  const isPasswordValid =
    /^(?=.*[A-Z]{2})(?=.*[a-z]{2})(?=.*[0-9]{2})(?=.*[!@#$%^&*()_+}{"?><':;.,/|~`\\[\]\-=])(?=.{8,})/.test(
      password,
    );

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = event => {
    event.preventDefault();
    femail(formData.emailId);
    fpassword(formData.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailId">Email ID *</label>
        <input
          id="emailId"
          type="email"
          name="emailId"
          value={emailId}
          onChange={handleInputChange}
        />
        {!isEmailValid && <span>Please enter a valid email ID.</span>}
      </div>
      <div>
        <label htmlFor="password">Password *</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {!isPasswordValid && (
          <span>
            Password must contain minimum 2 capital letters, 2 small letters, 2 numbers and 2
            special characters.
          </span>
        )}
      </div>
      <button type="button" disabled>
        Back
      </button>
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>

      <button
        type="button"
        onClick={e => {
          handleSubmit(e);
          setformno(1);
        }}
        disabled={!isFormValid}
      >
        Submit & Next
      </button>
    </form>
  );
};

export default Form1;
