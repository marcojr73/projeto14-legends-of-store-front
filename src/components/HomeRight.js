import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import tresh from "../assets/images/tresh.png"

export default function HomeRight(){
    return(
        <PurchaseDetails>
            <Showcase>
                <div className='item'>
                    <div className='details'>
                        <div className='img'>
                            essa seria a foto
                        </div>
                        <p>3000</p>
                    </div>
                    <div className='status'>
                        <p>+20 ability power</p>
                        <p>+150 health</p>
                    </div>
                </div>
                <div className='comprar'>
                    <button>Comprar</button>
                </div>
            </Showcase>
            <div className='linha-horizontal'>

            </div>
            <Cart>
                <div className="profile">
                    <div className="buy">
                        <img src={tresh} />
                        <p>.descrição</p>
                        <button className="purchase">Finalizar Compra</button>
                    </div>
                    <div className="bag">
                        <div className="square" > <img src={tresh} /> </div>
                        <div className="square" > <img src={tresh} /> </div>
                        <div className="square" > <img src={tresh} /> </div>
                        <div className="square" ></div>
                        <div className="square" ></div>
                        <div className="square" ></div>
                        <div className="square" ></div>
                        <div className="square" ></div>
                    </div>
                </div>
            </Cart>
        </PurchaseDetails>
    )
}

const PurchaseDetails = styled.div`
    height: 100vh;
    width: 45vw;
`

const Showcase = styled.div`
    height: 50vh;
    padding: 40px 60px;
    position: relative;
    .item{
        display: flex;
    }
    .details{
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
        .img{
        width: 150px;
        height: 150px;
        background: white;
        margin-bottom: 10px;
        }
        p{
            color: #FFD710;
        }
    }
    .status{
        p{
            font-size: 20px;
            color: white;
            margin-bottom: 20px;
        }
    }
    
    .comprar{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 20px;
        button{
            background: #396A82;
            border-radius: 6px;
            border: none;
            width: 300px;
            height: 45px;
        }
    }
`

const Cart = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    margin-top: 60px;

    .profile{
        width: 886px;
        height: 350px;
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

    .purchase{
        background: #396A82;
        border-radius: 6px;
        border: none;
        width: 150px;
        height: 45px;
    }

    .bag{
        width: 586px;
        height: 250px;
        background: #13262F;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .square{
        margin-top: 15px;
        margin-left: 10px;
        width: 100px;
        height: 100px;
        background: #102028;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`