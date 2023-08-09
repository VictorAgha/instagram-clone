import React from 'react';
import Input from '../../tools/input';
import './style.css';
import Button from '../../tools/button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const RegisterPage = (onchange) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleRegister = () => {
        const data = {
            email: email,
            password: password,
            name: name,
            username: username,
        };

        axios.post('http://127.0.0.1:8000/api/register', data)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.log('error', error);
            });
    };

    return (
        <div className='register'>
            <div className="container">
                <div className='logo'>
                    <img src="https://i.imgur.com/zqpwkLQ.png" />
                </div>
                <div className='form-input'>
                    <Input
                        type={'text'} placeholder={'Name'} value={name}
                        onChange={(e) => setName(e.target.value)}></Input>
                    <Input
                        type={'text'} placeholder={'Username'} value={username}
                        onChange={(e) => setUsername(e.target.value)}></Input>
                    <Input
                        type={'email'} placeholder={'Email'} value={email}
                        onChange={(e) => setEmail(e.target.value)}></Input>
                    <Input
                        type={'password'} placeholder={'Password'} value={password}
                        onChange={(e) => setPassword(e.target.value)}></Input>
                </div>
                <div className='registerbtn'>
                    <Button onClick={handleRegister}> {'Register'} </Button>
                </div>
                <div className='registerlink'>
                    <p>Already have an account? <a className='reg' href="/">Click Here</a></p>
                </div>
            </div>
            <div>
            </div>
        </div >
    )
}

export default RegisterPage;