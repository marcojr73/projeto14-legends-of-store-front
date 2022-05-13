import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';

import lux from "../assets/images/lux.png"
import yasuo from "../assets/images/yasuo.png"
import tresh from "../assets/images/tresh.png"
import ashe from "../assets/images/ashe.png"
import galio from "../assets/images/galio.png"
import banner from "../assets/images/banner.png"

export default function SignIn(){

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ champion, setChampion ] = useState("")
    const [ css, setCss ] = useState();
    const champions =  [ lux, yasuo, tresh, ashe, galio, lux, lux, lux, lux, lux]


    const navigate = useNavigate()
    const url = "http://localhost:5000/sign-in"

    function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password,
            champion
        }
        console.log(data)
        
        const promisse = axios.post(url, data)
        promisse.then(response => {

            const locals = JSON.stringify(response.data.token)
            localStorage.setItem("token", locals)

            // name.setName(response.data.name)
            navigate("/home")
        })
        promisse.catch(e => {
            alert(e.response.data)
            console.log(e)
        })
    }

    function toggle(champion, index){
        setChampion(champion)
        setCss(index)
        console.log(index)
    }

    return(
        <>
            <ContainerLogin>
                <div className="containerLeft">
                <h1> Sign in </h1>
                <form onSubmit={logInUser}>
                    <input  type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                    ></input>

                    <input  type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                    ></input>

                    <div className="champions">
                        <p className="choice">Escolha o seu campeão</p>
                        <div className="pool">
                            {champions.map((champion, index) => {
                                const border = index == css ? "selected" : "" 
                                return(
                                    <img src={champion} className={border}  onClick={()=> toggle(champion, index)} alt="champion" />
                                )
                            })}
                        </div>
                    </div>

                    <button type="submit">Entrar</button>
                    <Link to="/sign-up">Crie sua conta</Link>
                </form>
                </div>
                <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                </div>
            </ContainerLogin>
        </>
    )
}
