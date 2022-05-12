import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

export default function Home(){
    return(
        <Container>
            <Top>
                <h1>STORE OF LEGENDS</h1>
            </Top>
            <div className='linha-horizontal'></div>
            <Content>
                <HomeLeft></HomeLeft>
                <div className='linha-vertical'></div>
                <HomeRight></HomeRight>
            </Content>
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

const Content = styled.div`
    display: flex;
    .linha-vertical{
        width: 3px;
        height: 100vh;
        background: #164D60;
    }
`

const Items = styled.div`
    width: 55vw;
    height: 100%;
    box-sizing: border-box;
    padding: 40px 50px;
`