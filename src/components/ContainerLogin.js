import styled from "styled-components"
import banner from "../assets/images/banner.png"

const ContainerLogin = styled.main `

    height: 100vh;
    width: 100vw;
    display: flex;

    .hidden{
        display: none;
    }

    .warning{
        color: red;
    }

    .containerLeft{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 650px;
    }

    form{ 
        position: absolute;
        top: 172px;
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-family: 'Jockey One', sans-serif;
        font-size: 42px;
        position: absolute;
        left: 70px;
        top: 72px;
    }

    input{
        width: 342px;
        height: 44px;
        margin: auto;
        margin-bottom: 20px;
        background: #EAEAEA;
        font-family: 'abel', sans-serif;
        font-size: 24px;
        border: 0px;
        border-radius: 3px;
        padding: 15px;
        box-sizing: border-box;
    }

    input:focus{
        outline: none;
    }
    
    input::placeholder{
        font-family: 'abel', sans-serif;
        font-size: 24px;
        color: #C9BBBB;
    }

    .champions{
        width: 342px;
        margin-bottom: 15px;
        background: #EAEAEA;
        border-radius: 3px;
    }

    .selected{
        border: 3px solid #FFD710;
        border-radius: 0;
    }
    
    .ch{
        border: 2px solid black;
    }

    img{
        width: 60px;
        border-radius: 50%;
    }

    .choice{
        text-align: center;
        font-family: 'abel', sans-serif;
        font-size: 24px;
        color: #C9BBBB;
        padding: 10px;
    }

    .pool{
        display: grid;
        margin: auto;
        width: 350px;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 12px;
        grid-column-gap: 0px;
    }

    button{
        width: 194px;
        height: 36px;
        background: #BFD8B8;
        border: 0px;
        font-family: 'abel', sans-serif;
        font-size: 22px;
        border-radius: 3px;
        margin-top: 10px;
        cursor: pointer;
    }

    .banner{
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
    }

    a{
        font-family: 'abel', sans-serif;
        text-decoration: none;
        margin-top: 92px;
        color: black;
    }

`

export default ContainerLogin