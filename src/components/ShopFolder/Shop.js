import React from 'react';
import styled from 'styled-components';
import data from '../../helpers/data';
import ShopItem from './ShopItem';
//-----Styled Components-----//
const ShopWrapper = styled.div`
  min-height: 800px;
  background: #0B486A; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #225A99,
    #0B486A
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #225A99,
    #0B486A
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`; 
const ShopList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media only screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
  }
`; 

//-----End of Styled Components-----//
export default function Shop(props) {
    return (
      <ShopWrapper>
        <ShopList>
          {data.map((game) => {
            return (
              <ShopItem key={game.name} game={game} addItem={props.addItem} />
            );
          })}
        </ShopList>
      </ShopWrapper>
    );
  }  