import tresh from "../assets/images/tresh.png"
import styled from "styled-components"


export default function Bag({ bag }) {

    

    return (
        bag === undefined ?
            <p></p>
            :
            <Cart>
                <div className="profile">
                    <div className="buy">
                        <img src={tresh} />
                        <p> 40 armadura </p>
                        <p> 20 poder de habilidade </p>
                        <p> 50 velocidade de ataque </p>

                    </div>
                    <ul className="bag">
                        {bag.slice(-8).map(iten => {
                            return (
                                <li className="square"><img src={iten.img} /></li>
                            )
                        })}
                    </ul>
                </div>
                <button className="purchase">Finalizar Compra</button>
            </Cart>
    )
}

const Cart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;

    .profile{
        width: 80%;
        height: 60%;
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
        width: 80%;
        height: 45px;
    }

    .bag{
        width: 450px;
        height: 250px;
        background: #13262F;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .square{
        margin-top: 12px;
        margin-left: 5px;
        width: 100px;
        height: 100px;
        background: #102028;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

`