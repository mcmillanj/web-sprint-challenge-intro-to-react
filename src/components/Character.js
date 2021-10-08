// Write your Character component here
import React,{useState} from 'react'
import styled from 'styled-components';

const stlyedContainer = styled.div`
width:75%;
border:2px solid black;
`;
const styledDiv = styled.div`
border:2px solid black;
background-color:black;
align-content:center;

`;
const styledName = styled.h2`
font-size:24px;
color:white;
// background-color:black;
font-family:fantasy
`;
const styledInfo = styled.p`
color: white;
font-size:24px;
font-family:fantasy
display:none;
`;

function Character(props)
{
 const {character} = props;
 
return(
    <stlyedContainer className="center">
        
        {character.map((item) =>{

           return( 
            <styledDiv> 
              <div className="name-birth">
             <styledName>{item.name},{item.birth_year}</styledName>
             </div>
             <styledInfo classname=" info-under" >  
              <p>gender:{item.gender}</p>              
             <p>Height:{item.height}</p>
             <p>Mass:{item.mass}</p>
             <p>Hair_color:{item.hair_color}</p>
             <p>Skin_color:{item.skin_color}</p>
             <p>Birth Year:{item.birth_year}</p>
             </styledInfo >
             </styledDiv>
           )
            })};
             
         </stlyedContainer>

)

}
export default Character;