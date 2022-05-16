import styled from "styled-components"
import UserContext from "./UserContext"
import { useContext } from "react"
import axios from "axios"

export default function Finish({confirm, setConfirm}){

    const url = "http://localhost:5000/purchase"
    const token = JSON.parse(localStorage.getItem("token"))
    const { email } =  useContext(UserContext)

    const { bag, setBag } = useContext(UserContext)

    function sendMail(){

        const config = {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }

        const data = {
            bag,
            email
        }

        const promisse = axios.post(url, data, config)
        promisse.then(response => {
            alert("compra concluida")
            
        })
        promisse.catch(e => {
            alert("deu um erro")
        })

        setBag([])
        setConfirm(false)

        

        

    }
    
    let price = 0
    return(
        confirm ?
        <Container>
            <PopUp>
                <ul><p className="title">Parabéns Invocador!<br></br><br></br> Sua compra foi finalizada</p>
                    {bag.slice(-8).map(iten => {
                        price += parseInt(iten.price);
                        return(
                            <li> <p className="name">{iten.name}</p><p className="price">{iten.price}</p> </li>
                        )
                    })}
                <li className="result"> <p className="name total">TOTAL</p><p className="price">{price}</p> </li>
                </ul>
                <button onClick={() => sendMail()}>Concluir</button>
            </PopUp>
        </Container>
        :
        <></>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 111vh;
    top: 0;
    right: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
`

const PopUp = styled.section `
    width: 20%;
    height: 60%;
    padding: 20px 0;
    box-sizing: border-box;
    position: absolute;
    top: 20%;
    right: 0;
    left: 0;
    margin: auto;
    background: rgba(40, 67, 87, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    ul{
        width: 80%;
        display: flex;
        flex-direction: column;
        font-family: 'Volkhov';
        font-size: 28px;
    }

    .title{
        text-align: center;
        margin-bottom: 45px;
        color: #B1AA80;
        font-family: 'Volkhov';
    }

    li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
    }

    .name{
        color: white;
        font-size: 18px;
    }

    .price{
        color: #FFD710;
        font-size: 20px;
    }

    .result{
        margin-top: 50px;
    }

    .total{
        font-size: 23px;
    }

    button{
        width: 50%;
        color: white;
        background: #6DAE6B;
        height: 50px;
        font-size: 35px;
        border: none;
        border-radius: 10px;
        font-family: 'Volkhov';
    }
`