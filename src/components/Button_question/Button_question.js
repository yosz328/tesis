

import Button from '@material-ui/core/Button';
import styled from "styled-components";
import {ImageSelector} from '../../services'


const ButtonsWrapper = styled.div`

    
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const Imagen = styled.img`
width: 240px;
height: 320px;

`
;
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  // Used like so


const Button_question = ({pregunta1, pregunta2, pregunta3, pregunta4, imagen, onClick }) => {
    let pregunta_array = [];
    pregunta_array.push(pregunta1)
    pregunta_array.push(pregunta2)
    pregunta_array.push(pregunta3)
    pregunta_array.push(pregunta4)
    shuffle(pregunta_array);
   
    

    return (
                        <Wrapper>
                            <Imagen src={imagen} ></Imagen>
                            <ButtonsWrapper>
                                <Button  variant="contained" color="primary" size="medium" style={{ margin: '10px'}}  onClick={onClick} > {pregunta_array[0]} </Button>
                                <Button  variant="contained" color="primary" size="medium" style={{ margin: '10px'}}  onClick={onClick} > {pregunta_array[1]} </Button>
                            </ButtonsWrapper>
                            <ButtonsWrapper>
                                <Button  variant="contained" color="primary" size="medium" style={{ margin: '10px'}}  onClick={onClick} > {pregunta_array[2]} </Button>
                                <Button  variant="contained" color="primary" size="medium" style={{ margin: '10px'}}  onClick={onClick} > {pregunta_array[3]}</Button>
                            </ButtonsWrapper>
                        </Wrapper>
    );
}
export default Button_question;