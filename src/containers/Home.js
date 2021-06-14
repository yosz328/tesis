import react, {Component} from "react";
import styled from "styled-components";
import Card from "../components/Card";
//import Button from "../components/Button"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getPreguntas} from '../services'

import question from '../data/Preguntas.json'


const FormWrapper = styled.div`
  margin-bottom: 100px;
  width: 40%;
  margin: auto;
  margin-bottom: 150;
  zoom: 1;
`;

const TitleText = styled.h2`
  left: 0;
  right: 0;
  justify-contint: center;
  text-align: center;
  color: rgb(0,0,0) !important;
  padding: 0;
`;

const ButtonWrapper = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const FormularioWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            formName: '',
            correcto: false
        };
    }
    componentWillMount() {
        
        
        /*getPreguntas()
            .then(result => {             
                localStorage.setItem('preguntas',JSON.stringify(result.data.response))    
            })
            .catch(err => {
                console.log(err);
            }); 
            */
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
    


    };
    // handle text input
    handleInput = (event) => {
        this.setState({
            formName: event.target.value
        })

    };

    
    render () {
        
        
        console.log(question.preguntas[0].pregunta);
   
        return(
            <FormWrapper>
                <Card>
                    <TitleText>{question.preguntas[0].pregunta}</TitleText>
                    <ButtonWrapper>
                        {
                            !this.state.correcto &&
                            
                            <FormularioWrapper onSubmit={this.handleSubmit}>
                                <TextField  id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleInput}  />
                                <Button type="submit" variant="contained" color="primary" > Primary </Button>
                            </FormularioWrapper>
                            
                        }

                        <p>32</p> 
                         <TextField  id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleInput}  />
                         <p>69</p>
                    </ButtonWrapper>
                </Card>
            </FormWrapper>
        );
    }
}

export default Home;