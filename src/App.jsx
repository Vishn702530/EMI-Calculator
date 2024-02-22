import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './App.css';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (e) => {
    const principalAmount = parseFloat(principal);
    const interest = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const months = parseFloat(tenure) * 12; // Total number of monthly payments

    const emiValue =
      principalAmount * interest * Math.pow(1 + interest, months) /
      (Math.pow(1 + interest, months) - 1);

    setEmi(emiValue.toFixed(2));
  };

  const reset = (e) => {
    setPrincipal(0);
    setInterestRate(0);
    setTenure(0);
    setEmi(0);
  };

  return (
    
    <div className="App">
      
      <div className="container">
        <h1>EMI Calculator</h1>
        <p>Calculate Equated Monthly Installments</p>

        <div className="total">
          <h2>&#8377;{emi}</h2>
          <p>Your EMI</p>
        </div>

        <div className="form">
          <form>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Principal Amount"
                variant="outlined"
                onChange={(e) => setPrincipal(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Emi percentage (%)"
                variant="outlined"
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Tenure (Years)"
                variant="outlined"
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="button">
          <Button variant="contained" color="warning" onClick={calculateEMI}>
            Calculate EMI
          </Button>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>

    </div>
  );
}

export default App;