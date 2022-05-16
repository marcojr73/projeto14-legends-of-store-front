import UserContext from "./UserContext"
import { useContext, useEffect, useLayoutEffect } from "react"

import styled from "styled-components"
import Finish from "./Finish"
import { useState } from "react/cjs/react.development"


export default function Bag() {

    const champion = JSON.parse(localStorage.getItem("champion"))

    const { bag, setBag } = useContext(UserContext)
    const [ confirm, setConfirm ] = useState(false)
    

    let damage = 0;
    let health = 0;
    let critical = 0;
    let power = 0;
    let haste = 0;
    let armor = 0;

    bag.forEach(iten => {
        damage += iten.allStats[0]   
        health += iten.allStats[1]   
        critical += iten.allStats[2]   
        power += iten.allStats[3]   
        haste += iten.allStats[4]   
        armor += iten.allStats[5]   
    })

    function removeIten(index){
        bag.splice(index, 1)
        setBag([...bag])
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
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/axe.png"/><p>{damage} Damage</p></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/heart.png"/><p>{health} Life</p></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/ability/miss-fortune-double-up.png"/><p>{critical}% Critical Chance</p></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/diamond.png"/><p>{power} Ability Power</p></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/circle.png"/><p>{haste} Ability Haste</p></li>
                                <li><img className="icon" src="https://www.mobafire.com/images/shards/shield.png"/><p>{armor} Armor</p></li>
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
                    <button onClick={()=>setConfirm(true)} className="purchase">Buy now!</button>
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

    li{
        display: flex;
        color: white;
    }

    .purchase{
        background: #396A82;
        border-radius: 6px;
        border: none;
        width: 80%;
        height: 45px;
        font-size: 20px;
        font-weight: bold;
        color: #B1AA80;
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
        img{
            width: 80px;
            height: 80px;
        }
    }

    .stats{
        display: flex;
        flex-direction: column;
    }

    .icon{
        margin-right: 8px;
        width: 18px;
    }

`