import styled from "styled-components"
import UserContext from "./UserContext"
import { useContext } from "react"

export default function Finish({confirm, setConfirm}){

    function clear(){
        setBag([])
        setConfirm(false)
    }

    const { bag, setBag } = useContext(UserContext)
    let price = 0
    console.log(bag)
    return(
        confirm ?
        <PopUp>
            <ul><p className="title">Ticket</p>
                {bag.slice(-8).map(iten => {
                    price += parseInt(iten.price);
                    return(
                        <li> <p className="name">{iten.name}</p><p className="price">{iten.price}</p> </li>
                    )
                })}
            <li className="result"> <p className="name">Total</p><p className="price">{price}</p> </li>
            </ul>
            <button onClick={() => clear()}>Concluir</button>
        </PopUp>
        :
        <></>
    )
}

const PopUp = styled.section `
    width: 20%;
    height: 60%;
    position: absolute;
    top: 10%;
    right: 0;
    left: 0;
    margin: auto;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 3px solid #FFD710;
    border-radius: 5px;

    ul{
        width: 80%;
        display: flex;
        flex-direction: column;
        font-family: 'Volkhov';
        font-size: 28px;

    }

    .title{
        align-self: center;
        margin-bottom: 45px;
    }

    li{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .name{
        color: black;
    }

    .price{
        color: #FFD710;
    }

    .result{
        margin-top: 80px;
    }
`