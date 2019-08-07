import React from 'react';
import styled from 'styled-components'
import zdj from '../road.jpg'

const MainPostStyled = styled.div `
display: flex;
flex-direction: row;
width: 100 %;
background-color: whitesmoke;
border: solid 1px black;
padding:  10px;
`;

const MainPostText = styled.p `
flex: 2;
font-size: 14pt;
color: black;
justify-content: center;
`;

const MainPostImg = styled.img `
flex: 1;
width: 500px;
height: 400px;
padding: 0px;
border: solid 2px darkgrey;

`;


const MainPost  = props => {

    return (
            <MainPostStyled>
                <MainPostImg src={zdj} />
                <MainPostText>   {props.mainPostText}</MainPostText>
                </MainPostStyled>

    )


}

export default MainPost;