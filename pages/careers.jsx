import React from 'react';

const CareersPage = () => {
  return (
    <div>
      <h1>Join the team!</h1>
      <p>Feel free to reach out to us for any inquiries or feedback.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CareersPage;
