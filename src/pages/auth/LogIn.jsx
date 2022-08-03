import React, { useState } from "react";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import Form from '../../components/Forms/Form';
import Alert from '@mui/material/Alert';

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credentials = {
      username: data.get('username'),
      password: data.get('password'),
    };

    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      if(res.data.user.role === "admin"){
        navigate("/admin")
       } else { navigate("/") }
      
    });
  }

  return (
    <div>
      
      <div className="auth__form">
        <Form type={"Log In"} handleFormSubmission={handleFormSubmission} handleInputChange={handleInputChange} form={form}/>
        
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
  );
}
