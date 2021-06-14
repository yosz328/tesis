import * as React from "react";
import styled from "styled-components";
import { colors } from "../variables";



const Card = styled("div")`
    background-color: white;
    border-radius: 24px;
    padding: 8px 16px;
    margin: 16px 0;
    box-shadow: 0 6px 8px 0 rgba(52,69,89,0.20);
    position: relative;
    transition: all 0.15s ease;
    border: none;

    width: 300px;

    @media (min-width: 720px){
        width: 80%;  
    }

`;

export default Card;