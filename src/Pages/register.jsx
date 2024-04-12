import React, { useState } from 'react';
import './Registration.css'; // Import your CSS file

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., send data to backend)
    console.log('Submitting registration form:', { name, email, phone, city, country });

    // Clear form fields after successful submission (optional)
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setCountry('');
  };

  return (
    <div className="registration-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
