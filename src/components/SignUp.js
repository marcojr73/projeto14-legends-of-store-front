import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';

import banner from "../assets/images/banner.png"


export default function SignUp(){
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const url = "http://localhost:5000/sign-up"

    function signUpUser(e){
        e.preventDefault()

        const data = {
            username,
            email,
            password,
            confirmPassword
        }
        
        const promise = axios.post(url, data)
        promise.then(response => {
            navigate("/")
        })
        promise.catch(e => {
            alert(e.response.data)
            console.log(e)
        })
    }

    return(
        <>
            <ContainerLogin>
                <div className="containerLeft">
                    <h1> Sign up </h1>
                    <form onSubmit={signUpUser}>
                        <input  type="text" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                        ></input>

                        <input  type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                                required
                        ></input>

                        <input  type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Senha"
                                required
                        ></input>

                        <input  type="password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirme sua senha"
                                required
                        ></input>

                        <button type="submit">Cadastre-se</button>
                        <Link to="/">Já tem uma conta? Faça o login</Link>
                    </form>
                </div>
                <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                    
                </div>
            </ContainerLogin>
        </>
    )
}
