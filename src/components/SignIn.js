import UserContext from './UserContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Loader from './Loader';

import banner from "../assets/images/logscreen.gif"

export default function SignIn(){

    // const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ champions, setChampions ] = useState("")
    const [ css, setCss ] = useState();
    const [ load, setLoad ] = useState("Login")
    const [ champion, setChampion ] = useState([])
    const { email, setEmail } =  useContext(UserContext)
    const url = "https://legends-of-store.herokuapp.com/sign-in"

    const navigate = useNavigate()

    function logInUser(e){
        e.preventDefault()

        setLoad(<Loader/>)

        const data = {
            email,
            password,
            champion
        }
        
        const promisse = axios.post(url, data)
        promisse.then(response => {
            const locals = JSON.stringify(response.data.token)
            localStorage.setItem("token", locals)

            setEmail(email)

            const handle = JSON.stringify(champion)
            localStorage.setItem("champion", handle)

            navigate("/home")
        })

        promisse.catch(e => {
            alert(e.response.data)
            console.log(e)
            setLoad("Login")
        })
    }

    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/champions")
        promise.then(response => {
            setChampions(response.data);
            console.log(response.data)
        })
        promise.catch(err => 
            console.log(err.response.data))
    }, [])

    function toggle(champion, index){
        setChampion(champion)
        setCss(index)
    }

    return(
        champions.length === 0 ?
        <p>carregando</p>
        :
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
                            placeholder="Passsword"
                    ></input>

                    <div className="champions">
                        <p className="choice">Choose your champion</p>
                        <div className="pool">
                            {champions.map((champion, index) => {
                                const border = index == css ? "selected" : "" 
                                return(
                                    <img src={champion.img} className={border}  onClick={()=> toggle(champion.img, index)} alt="champion" />
                                )
                            })}
                        </div>
                    </div>
                    <button type="submit">{load}</button>
                    <Link to="/sign-up">Create an account</Link>
                </form>
                </div>
                <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                </div>
            </ContainerLogin>
        </>
    )
}
