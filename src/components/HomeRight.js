import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import tresh from "../assets/images/tresh.png"
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
            <Bag></Bag>
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
                    <button onClick={() => addBag(selected) } className="comprar">Comprar</button>
                </Showcase>
                <Bag bag={bag} setBag={setBag} />
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
    }

    
    .status{
        width: 40%;
        height: 50%;
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