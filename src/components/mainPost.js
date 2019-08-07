import React from 'react';
import styled from 'styled-components'
import zdj from '../road.jpg'
import widithDivBlog from './projConstans';

// Conteiner for Img and Text
const MainPostStyled = styled.div `
grid-row-start: 2;
justify-self: center;
display:flex;
flex-direction: row;
width: ${widithDivBlog};
background-color: whitesmoke;
padding-top: 5px;
padding-bottom: 5px;
`;

// Styled Parahraph
const MainPostText = styled.p `
font-size: 14pt;
color: black;
`;

// Styled IMG
const MainPostImg = styled.img `
width: 500px;
height: 400px;
padding: 0px;
border: solid 2px darkgrey;
box-shadow: 3px 3px black;
`;

// Conteiner for Paragraph
const MainPostTextDiv = styled.div `
width:30%;
padding: 5px;
text-align: justify;
margin:10px;
`;

// Conteiner for IMG
const MainPostImgDiv = styled.div `
width: 60%;
padding: 5px;
margin: 5px;
`;


const MainPost  = props => {

    return (
            <MainPostStyled>
               <MainPostImgDiv><MainPostImg src={zdj} /></MainPostImgDiv>
               <MainPostTextDiv> 
                <MainPostText>   {props.mainPostText}</MainPostText></MainPostTextDiv>
                </MainPostStyled>

    )


}

export default MainPost;