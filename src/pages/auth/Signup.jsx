import React, { useState } from "react";
import { signup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as USER_HELPERS from "../../utils/userToken";
import Form from '../../components/Forms/Form';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';

export default function Signup({ authenticate }) {

  //const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "", 
    password: "", 
    email: ""
  })

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password')
    };

    signup(credentials).then((res) => {
      
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate("/");
    });
  }

  return (
    <Container minWidth="lg">
    <div className="Form">
      
      <div className="auth__form">
      <Form type={"Sign Up"} handleFormSubmission={handleFormSubmission} handleInputChange={handleInputChange} form={form}/>
       
        {error && (
        
          <div className="error-block">
            <Alert severity="error">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
            </Alert>
          </div>
        
        )}
        </div>
    </div>
    </Container>
  );
}
