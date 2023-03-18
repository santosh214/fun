import React, { useState } from 'react';

export default function Register() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <label htmlFor='email' >email</label>
          <input type='text' name='' id='' />
          <br />
          <label htmlFor='email'>password</label>
          <input type='text' name='' id='' />
        </div>
      </div>
    </div>
  );
}
