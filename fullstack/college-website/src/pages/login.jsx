import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('User registered successfully!');
        setFormData({ email: '', password: '' });
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Error submitting form');
    }
  };

  return (
    <StyledWrapper>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <input
              placeholder="Enter your Email"
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <input
              placeholder="Enter your Password"
              className="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>

          <button className="button-submit" type="submit">Sign In</button>
          <p className="p">
            Don't have an account? <span className="span">Sign Up</span>
          </p>
          <p className="p line">Or With</p>

          <div className="flex-row">
            <button className="btn google" type="button">Google</button>
            <button className="btn apple" type="button">Apple</button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
  }
`;

export default Form;
