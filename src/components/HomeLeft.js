import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import UserContext from './UserContext';

import img from "./../assets/images/ashe.png"


export default function HomeLeft(){
    const [allItems, setAllItems] = useState([]);
    const {selected, setSelected} = useContext(UserContext)
    
    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/items")
        promise.then(response => {
            setAllItems(response.data);
        })
        promise.catch(err => 
            console.log(err.response.data))
    }, [])
    console.log(selected)
    return(
        <Container>
            <section className='starter-items'>
                <h1>STARTER ITEMS</h1>
                <div className='items'>
                {allItems.map((item, id)=>{
                    return(
                        item.type === "starter" ?
                        <Item key={id} onClick={() => {
                            setSelected(item)
                        }}>
                            <img src={item.img} alt={item.id}></img>
                            <p>{item.price}</p>
                        </Item> :
                        <></>
                    )
                })}
                </div>
            </section>
            <section className='boots'>
                <h1>BOOTS</h1>
                <div className='items'>
                {allItems.map((item, id)=>{
                    return(
                        item.type === "boots" ?
                        <Item key={id} onClick={() => {
                            setSelected(item)
                        }}>
                            <img src={item.img} alt={item.id}></img>
                            <p>{item.price}</p>
                        </Item> :
                        <></>
                    )
                })}
                </div>
            </section>
            <section className='legendary'>
                <h1>LEGENDARY</h1>
                <div className='items'>
                {allItems.map((item, id)=>{
                    return(
                        item.type === "legendary" ?
                        <Item key={id} onClick={() => {
                            setSelected(item)
                        }}>
                            <img src={item.img} alt={item.id}></img>
                            <p>{item.price}</p>
                        </Item> :
                        <></>
                    )
                })}
                </div>
            </section>
            <section className='mythic'>
                <h1>MYTHIC</h1>
                <div className='items'>
                {allItems.map((item, id)=>{
                    return(
                        item.type === "mythic" ?
                        <Item key={id} onClick={() => {
                            setSelected(item)
                        }}>
                            <img src={item.img} alt={item.id}></img>
                            <p>{item.price}</p>
                        </Item> :
                        <></>
                    )
                })}
                </div>
            </section>

            {/* {allItems.map((item, id)=>{
                return(
                    <Item key={id} onClick={() => {
                        setSelected(item)
                    }}>
                        <img src={item.img} alt={item.id}></img>
                        <p>{item.price}</p>
                    </Item>
                )
            })} */}
        </Container>
    )
}

const Container = styled.div`
    width: 55vw;
    padding: 45px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    section{
        margin: 15px 0;
        h1{
            font-family: 'Volkhov', sans-serif;
            color: #C9C4B4;
        }
        div{
            display: flex;
            flex-wrap: wrap;
        }
    }
`

const Item = styled.button`
    height: 130px;
    width: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border-radius: 5px;
    background: none;
    border: none;
    cursor: pointer;
    img{
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
    }
    p{
        font-family: 'Volkhov';
        font-size: 17px;
        color: #FFD710;
    }

    &:hover{
        background: rgba(0, 0, 0, 0.15);
    }
`

