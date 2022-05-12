import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerLogin from './ContainerLogin';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from "styled-components";

export default function HomeLeft(){
    return(
        <Container>
            Left
        </Container>
    )
}

const Container = styled.div`
    width: 55vw;
`

