import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';

import banner from "../assets/images/logscreen.gif"
import Loader from './Loader';


export default function SignUp(){
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [ correct, setCorrect ] = useState(true);
    const [ load, setLoad ] = useState("Sign-up")
    const url = `${process.env.REACT_APP_API_BASE_URL}/sign-up`


    const navigate = useNavigate()

    function signUpUser(e){
        e.preventDefault()

        setLoad(<Loader/>)

        const data = {
            username,
            email,
            password,
            confirmPassword
        }

        if(password !== confirmPassword){
            setCorrect(false)
        }else{
            setCorrect(true);
            const promise = axios.post(url, data)
            promise.then(response => {
                navigate("/")
            })
            promise.catch(e => {
                setLoad(<Loader/>)
                alert(e.response.data)
                console.log(e)
        })
        }
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
                                placeholder="Password"
                                required
                        ></input>

                        <input  type="password" 
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)}
                                placeholder="Confirm your password"
                                required
                        ></input>
                        <p className={correct === true ? 'hidden' : 'warning'}>
                            As senhas não coincidem!
                        </p>

                        <button type="submit">{load}</button>
                        <Link to="/">Já tem uma conta? Faça o login</Link>
                    </form>
                </div>
                <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                    
                </div>
            </ContainerLogin>
        </>
    )
}