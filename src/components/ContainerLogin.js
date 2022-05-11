import styled from "styled-components"

const ContainerLogin = styled.main `

    position: relative;
    background: red;
    height: 100vh;
    width: 409px;
    display: flex;
    justify-content: center;

    form{ 
        background: blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 172px;
    }

    h1{
        font-family: 'Jockey One', sans-serif;
        font-size: 42px;
        position: absolute;
        top: 55px;
        left 35px;
    }

    input{
        width: 342px;
        height: 44px;
        margin: auto;
        margin-bottom: 10px;
    }

    .champions{
        width: 194px;
        margin-bottom: 15px;
        background: gray;

    }

    img{
        width: 50px;
    }

    .pool{
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 12px;
        grid-column-gap: 21px;
    }

    button{
        width: 194px;
        height: 36px;
    }


   
`

export default ContainerLogin