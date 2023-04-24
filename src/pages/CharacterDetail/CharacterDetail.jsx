import React from 'react';
import Character from '../../components/Character/Character';
import { useLocation } from 'react-router';
import './CharacterDetail.css'

const CharacterDetail = () => {
    const location = useLocation();
    const charToPrint = location.state.element;

    console.log(charToPrint);

  return (<div className='charpage'>
    <Character character={charToPrint}/>
  </div>
  ) 
  
  
}

export default CharacterDetail;
