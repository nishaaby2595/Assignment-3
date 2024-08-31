
import React, { useState } from 'react';






 


function Header() {

  
  let logoURL = "./images/logo.png";
  const [birthYear, setBirthYear] = useState('');
  let [applyStatus, setApplyStatus] = useState('Technology Solutions,Build your Way');

  const handleInputChange = (event) => {
    setBirthYear(event.target.value);
  };

    const calculateAge = () => {
      console.log("calculate age")
      const currentYear = new Date().getFullYear();
      const userAge = currentYear - Number(birthYear);
      console.log(userAge)

      if (userAge < 18) {
        console.log('inside loop')
        setApplyStatus('Welcome, Young Innovator!');
      } else {
        setApplyStatus('Welcome, Tech Enthusiast!');
      }
    };
      
  return (
    <header >
      <div className='Headerr'>
        <img src={logoURL} alt="Site Logo" />
        <h1>{applyStatus}</h1>
        <input
          type="number"
          value={birthYear}
          onChange={handleInputChange}
          placeholder="Enter your birth year"
        />
        <button onClick={calculateAge}>Submit</button>
      </div>

      
    </header>
    
  );
}

export default Header;
