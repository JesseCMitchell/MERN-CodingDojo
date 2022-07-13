import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

const InputForm = ({nameOfClass, name, placeholder, handleErrors}) => (
    <div className="mb-3">
        {/* htmlFor and name must match with key name in App.js State object */} 
        <Form.Control type="text" className={nameOfClass} name={name} placeholder={placeholder} onChange={handleErrors}/>
        {/* {errors.props.name ? <p className="text-danger small">{errors.props.name}</p> : "" } */}
    </div>
)




const UserForm = props => {
    // Destructuring props into "inputs" and "setInputs" variables
    const { inputs, setInputs } = props;

    // Create an object that handles errors in the form
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Create an event handler for updating fields when data is passed through and checking for errors
    const handleErrors = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);

        if (e.target.name == "firstName" || e.target.name == "lastName") {
            if (e.target.value.length != 0 && e.target.value.length < 2) {
                setErrors({...errors,[e.target.name]: "Name must be at least 2 characters."});
            }else{
                setErrors({...errors,[e.target.name]: ""});
            }
        }
        if(e.target.name == 'email'){
            if(e.target.value.length < 2 && e.target.value.length != 0){
                setErrors({...errors, [e.target.name]: "Email must be at least 2 characters."});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }
        }
        if(e.target.name == 'password' || e.target.name == 'confirmPassword'){
            
            
            if((e.target.value.length < 2 && e.target.value.length != 0) ){
                
                setErrors({...errors, [e.target.name]: "Password must be at least 8 characters."});
            }
            else{
                setErrors({...errors, [e.target.name]: ""});
            }
        }
    };
    // Create form
    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <Form className="signup-form">
                <Form.Group>
                    <InputForm nameOfClass={"name-input"} name={"firstName"} placeholder={"First Name"} onChange={handleErrors}/>
                    <InputForm nameOfClass={"name-input"} name={"lastName"} placeholder={"Last Name"} onChange={handleErrors}/>
                    <InputForm nameOfClass={"email-input"} name={"email"} placeholder={"Email"} onChange={handleErrors}/>
                    <InputForm nameOfClass={"password-input"} name={"password"} placeholder={"Password"} onChange={handleErrors}/>
                    <InputForm nameOfClass={"password-input"} name={"confirmPassword"} placeholder={"Confirm Password"} onChange={handleErrors}/>
                    <div>
                        {(inputs.password != inputs.confirmPassword) ? <p className="text-danger small"> 
                        Passwords must match.</p> :''}
                    </div>
                    <div>
                        <Button className="submit-button" value="submit" type="submit">Submit</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
};

export default UserForm;
