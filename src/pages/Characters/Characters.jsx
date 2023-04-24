import React, { useContext, useEffect, useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import { CharactersContext } from '../../shared/characters.context';
import homeIcon from '../../assets/home-icon.png'
import lupa from '../../assets/lupa.png'
import './characters.css';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import i18n from '../../i18n';
import spanish from '../../assets/spain.png';
import english from '../../assets/united-kingdom.png'

const Characters = () => {
  const  { characters } = useContext(CharactersContext);
  const [filteredChars, setFilteredChars] = useState([]);
  const { lngs } = useContext(CharactersContext);
  const [language, setLanguage] = useState(i18n.language);

  const onFilter = (e) => {
    const filteredCharac = characters.filter((character)=> character.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredChars(filteredCharac);
  }

  useEffect(()=> {
    setFilteredChars(characters);
  }, [characters])

  useEffect(() => {
    const unregister = i18n.on('languageChanged', (lng) => {
      setLanguage(lng);
    });
  }, []);

  return (
    <div className='container-characters'>
      <div className='searcher'>
        <div className='searcher_input'>
          <img className='input-lupa' src={lupa} alt='lupa' />
          <input onChange={(e) => onFilter(e)} className='searcher_input-inp' type='text' placeholder='Search...' />
        </div>
        <div className='searcher_icon'>
          <Link to='/'>
            <img src={homeIcon} alt='home_icon-img'></img>
          </Link>
          {Object.keys(lngs).map((lng, index) =>{
            return (
              lngs[lng].nativeName === 'English' ? <img key={index} className='flags' onClick={() => i18n.changeLanguage(lng)} src={english} alt='home' /> : <img key={index} className='flags' onClick={() => i18n.changeLanguage(lng)} src={spanish} alt='star'/>
            )
          })} 
        </div>
      </div>
      <div className='gallery-container'>
        <Gallery props={filteredChars}></Gallery>
        <Menu></Menu>
      </div>
    </div>
  )
}

export default Characters;
