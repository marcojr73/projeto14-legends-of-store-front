import styled from "styled-components"
import UserContext from "./UserContext"
import { useContext } from "react"

export default function Finish({confirm}){

    const { bag, setBag } = useContext(UserContext)
    let price = 0
    console.log(bag)
    return(
        confirm ?
        <PopUp>
            <ul>Your Bag
                {bag.slice(-8).map(iten => {
                    price += parseInt(iten.price);
                    return(
                        <li> <p>{iten.name}</p><p>{iten.price}</p> </li>
                    )
                })}
            </ul>
            <p>{price}</p>
            <button>Voltar para a home</button>
        </PopUp>
        :
        <></>
    )
}

const PopUp = styled.section `
    width: 20%;
    height: 80%;
    position: absolute;
    top: 10%;
    right: 0;
    left: 0;
    margin: auto;
    background: #396A82;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;

    li{
        display: flex;
    }
`