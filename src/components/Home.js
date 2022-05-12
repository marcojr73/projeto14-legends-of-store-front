import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";

export default function Home(){
    return(
        <Container>
            <Top>
                <h1>STORE OF LEGENDS</h1>
            </Top>
            <div className='linha-horizontal'></div>
            <div className='content'>
                <Items>
                    varios itens uau
                </Items>
                <div className='linha-vertical'>

                </div>
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

                    </Cart>
                </PurchaseDetails>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #13262F;
    .linha-horizontal{
        height: 3px;
        background: #164D60;
    }
    .linha-vertical{
        width: 3px;
        height: 100vh;
        background: #164D60;
    }
    .content{
        display: flex;
        height: 100vh;
        background: #13262F;
    }
`

const Top = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    h1{
        margin-left: 25px;
        font-family: 'Volkhov', sans-serif;
        color: #B1AA80;
        letter-spacing: 0.115em;
        font-size: 36px;
    }
`

const Items = styled.div`
    width: 55vw;
    height: 100%;
    box-sizing: border-box;
    padding: 40px 50px;
`

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
`