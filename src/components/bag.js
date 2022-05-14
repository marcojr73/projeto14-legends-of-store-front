import UserContext from "./UserContext"
import { useContext } from "react"

import styled from "styled-components"
import Finish from "./Finish"
import { useState } from "react/cjs/react.development"


export default function Bag() {

    const {champion, setChampion} = useContext(UserContext)
    const { bag, setBag } = useContext(UserContext)
    const [ confirm, setConfirm ] = useState(false)
    

    function removeIten(index){
        bag.splice(index, 1)
        setBag([...bag])
        console.log(bag)
    }

    return (
        bag === undefined ?
        <></>
            :
            <>
            <Finish confirm={confirm} setConfirm={setConfirm}></Finish>
                <Cart>
                    <div className="profile">
                        <div className="buy">
                            <img className="champion" src={champion} />
                            <ul className="stats">
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/axe.png"/></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/heart.png"/></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/ability/miss-fortune-double-up.png"/></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/diamond.png"/></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/circle.png"/></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/shield.png"/></li>
                            </ul>
                        </div>
                        <ul className="bag">
                            {bag.slice(-8).map((iten, index) => {
                                return (
                                    <li onClick={() => removeIten(index) } className="square"><img src={iten.img} /></li>
                                )
                            })}
                        </ul>
                    </div>
                    <button onClick={()=>setConfirm(true)} className="purchase">Finalizar Compra</button>
                </Cart>
            </>
    )
}

const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;

    .profile{
        width: 80%;
        height: 60%;
        background: #102028;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .buy{
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }


    .champion{
        width: 125px;
    }

    .purchase{
        background: #396A82;
        border-radius: 6px;
        border: none;
        width: 80%;
        height: 45px;
    }

    .bag{
        width: 450px;
        height: 250px;
        background: #13262F;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .square{
        margin-top: 12px;
        margin-left: 5px;
        width: 100px;
        height: 100px;
        background: #102028;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    .stats{
        display: flex;
        flex-direction: column;
    }

    .icon{
        width: 18px;
    }

`