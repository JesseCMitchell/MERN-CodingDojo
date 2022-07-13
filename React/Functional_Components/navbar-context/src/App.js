import React, { useState } from 'react'
import UserContext from './contexts/UserContext';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import './App.css';

function App() {

  const [name, setName] = useState('Bob');

  return (
    <div className="App">
      <UserContext.Provider value={{name, setName}} >
          <Wrapper>    
              <Navbar/>
              <FormWrapper/>
          </Wrapper>
      </UserContext.Provider>
    </div>
  );
}

export default App;
