import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";

export default function HomeLeft(){
    const [allItems, setAllItems] = useState([]);
    
    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/items")
        promise.then(response => {
            setAllItems(response.data);
        })
        promise.catch(err => 
            console.log(err.response.data))
    }, [])

    return(
        <Container>
            {allItems.map((item, id)=>{
                return(
                    <Item key={id}>
                        <img src={item.img}></img>
                        <p>{item.price}</p>
                    </Item>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    width: 55vw;
    padding: 50px 45px;
    display: flex;
    flex-wrap: wrap;
`

const Item = styled.div`
    height: 100px;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    background-color: gray;
    img{
        width: 80px;
        height: 80px;
        margin-bottom: 7px;
    }
    p{
        font-family: 'Volkhov';
        font-size: 18
        
        px;
        color: #FFD710;
    }
`

