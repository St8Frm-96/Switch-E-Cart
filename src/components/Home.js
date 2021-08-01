import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../helpers/data';
import shuffle from '../helpers/shuffle';
import headerImg from '../assets/switch-eshop.jpg';
//----Styled Components----//
const HomeWrapper = styled.div`
  background: #fff;
  margin: auto;
  /* max-width: 1300px; */
  padding-left: 25px;
  padding-right: 25px;
  background: #0B486A; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c3e50,
    #0B486A
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2c3e50,
    #0B486A
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: #343435;
  padding: 5px;
  border-radius: 20px;
  transition: transform 0.5s;
  color: #fff;
  font-weight: 500;
  &:hover {
    transform: translateY(-5px);
  }
`;
const StyledRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const StyledColumn = styled.div`
  flex-basis: 50%;
  min-width: 300px;
  img {
    max-width: 100%;
    padding: 50px 0;
  }
`;
const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* ${ListItem}:nth-child(odd) {
    background: red;
  } */
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const Styledh1 = styled.h1`
  font-size: 40px;
  line-height: 100px;
  text-align: ${(props) => (props.header ? 'left' : 'inherit')};
  color: ${(props) => (props.header ? '#fff' : 'inherit')};
  position: relative;
  &::after {
    content: '';
    background: #fff;
    width: 300px;
    height: 7px;
    border-radius: 5px;
    position: absolute;
    bottom: 5px;
    margin: 10px auto;
    left: 50%;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 800px) {
    font-size: 30px;
    text-align: center;
    margin: 10px;
    line-height: 50px;
    &::after {
      bottom: 0;
      margin: 0 auto;
    }
  }
`;
const StyledP = styled.p`
  text-align: left;
`;
//----End of Styled Components----//

export default function Home() {
    const [featuredGame] = useState(shuffle([...data])); //randomize Featured Game
    return (
        <HomeWrapper>
          <StyledRow>
            <StyledColumn>
              <Styledh1 header>Enter a world of virtual wonder!</Styledh1>
              <StyledP>
                {' '}
                Switch E-Cart is your go-to online store dedicated to Nintendo Switch
                products. Come get the latest Switch games and accessories here. Choose your items, add it to
                the cart, and we'll deliver them to your door faster than driving on Rainbow Road!
              </StyledP>
            </StyledColumn>
            <StyledColumn>
              <img src={headerImg} alt="Switch Img"></img>
            </StyledColumn>
          </StyledRow>
          <div>
            <Styledh1>Featured Items</Styledh1>
            <StyledList>
              {featuredGame.slice(0, 3).map((game) => {
                return (
                  <ListItem key={game.name}>
                    <img src={game.image} alt={game.name}></img>
                    <p>{game.name}</p>
                    <p>${game.price}</p>
                  </ListItem>
                );
              })}
            </StyledList>
          </div>
        </HomeWrapper>
      );
    }    