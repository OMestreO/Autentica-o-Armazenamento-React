import { useState } from "react";
import React from "react";
import { useAuth } from "../context/AuthContext";

export const Signup = () =>{
  const {signUp} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit (element) {
    element.preventDefault();
    if(password.length < 6){
        alert('Passwords deve ter no minimo 6 caracteres');
        return;
    }
    if(password !== confirmPassword){
        alert('As password devem ser iguais');
        return;
    }

    try {
      await signUp(email, password);
    } catch (error) {
      alert('Ocorreu um erro ao cadastra usuario');
    }
  }

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input 
          type='email'
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label>Password</label>
        <input 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <labe>Password confirmation</labe>
        <input 
          type='password'
          value = {confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="button-block" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

