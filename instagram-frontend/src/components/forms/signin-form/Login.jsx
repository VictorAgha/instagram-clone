import React from 'react'
import Input from '../../tools/input';
import './style.css';
import Button from '../../tools/button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = (onchange) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const handleLogin = () => {
        const data = {
            email: email,
            password: password,
        };

        axios.post('http://127.0.0.1:8000/api/login', data)
            .then(response => {
                navigate('/landing');
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    return (
        <div className='login'>
            <div className="container">
                <div className='logo'>
                    <img src="https://i.imgur.com/zqpwkLQ.png" />
                </div>
                <div className='form-input'>
                    <Input type={'text'} placeholder={'Email'} value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <Input type={'password'} placeholder={'Password'} value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                </div>
                <div className='loginbtn'>
                    <Button onClick={handleLogin}> {'Login'} </Button>
                </div>
                <div className='registerlink'>
                    <p>Don't have an account? <a className='reg' href="/Register">Click Here</a></p>
                </div>
            </div>
            <div>
            </div>
        </div >
    )
}

export default LoginPage;