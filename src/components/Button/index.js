import styled from 'styled-components'

const Button = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-weight: 700;
    border-radius: 16px;
    border: none;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    height: 2.25em;
    display: inline-block;
    outline: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    -webkit-transition: -webkit-transform 150ms ease-out;
    -webkit-transition: transform 150ms ease-out;
    transition: transform 150ms ease-out;
    margin: 8px 0;
    width: 100%;
    
    
    ${({shadow}) => shadow && `box-shadow: 0 6px 8px 0 rgba(52,69,89,0.20);` || `box-shadow:none;`}
    ${({textColor}) => textColor && `color:${textColor}` || `color:#0064FA`};
    ${({backgroundColor}) => backgroundColor && `background-color:${backgroundColor}` || `background-color:#EFF6FF`};
    
`;



export default Button;