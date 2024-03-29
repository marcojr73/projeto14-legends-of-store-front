import React, { useState } from 'react';
import styled from "styled-components";
import UserContext from './UserContext';
import { useContext } from 'react';
import Bag from './bag';


export default function HomeRight() {

    const { selected } = useContext(UserContext)
    const { bag, setBag } = useContext(UserContext)

    function addBag(selected){
        bag.push(selected)
        setBag([...bag])
    }

    return (
        selected.stats === undefined ?
            <PurchaseDetails>
                <Showcase>
                    <div className='item'></div>
                </Showcase>
                <Bag></Bag>
            </PurchaseDetails>
        :
            <PurchaseDetails>
                <Showcase>
                    <div className='item'>
                        <div className='details'>
                            <img src={selected.img} />
                            <p>{selected.price}</p>
                        </div>
                        <div className='status'>
                            <p>{selected.name}</p>
                            {selected.stats.map(stats => {
                                return(
                                    <li>{stats}</li>
                                )
                            })}
                        </div>
                    </div>
                    <button onClick={() => {
                        if(bag.length === 8){
                            return(alert("You've achieved the limit! Remove items from your bag to add more!"))
                        }else{
                            addBag(selected)
                        }
                        } } className="comprar">Add to your bag</button>
                </Showcase>
                <Bag bag={bag} setBag={setBag}/>
            </PurchaseDetails>
    )
}

const PurchaseDetails = styled.div`
    height: 100vh;
    width: 45vw;
`

const Showcase = styled.div`
    height: 40vh;
    position: relative;
    border-bottom: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .item{
        width: 80%;
        height: 60%;
        background: #102028;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .details{
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 50px;
        img{
        width: 100px;
        height: 100px;
        }
        p{
            font-size: 28px;
            color: #FFD710;
        }
    }
    
    .comprar{
        background: #396A82;
        border-radius: 6px;
        border: none;
        width: 80%;
        height: 45px;
        font-size: 20px;
        font-weight: bold;
        color: #B1AA80;
    }

    
    .status{
        width: 40%;
        height: 70%;
        margin-top: 30px;
        overflow-y: scroll;
        p{
            font-size: 32px;
            color: #FFD710;
            margin-bottom: 31px;
        }
        li{
            font-family: 'Volkhov', sans-serif;
            font-size: 20px;
            color: white;
            margin-bottom: 20px;
        }
    }
`