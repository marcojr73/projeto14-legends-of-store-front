import React from "react";
import styled from "styled-components";
import { Bars } from "react-loader-spinner";

export default function Loader() {
    return (
        <Container>
            <Bars
                align="center"
                heigth="30"
                width="30"
                color='black'
                ariaLabel='loading'
            />
        </Container>
    )
}

const Container = styled.div`
    width: 194px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`