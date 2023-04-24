import React, { useContext, useEffect, useState } from 'react'
import Menu from '../../components/Menu/Menu'
import logo from '../../assets/logo.png'
import './home.css';
import i18n from '../../i18n';
import spanish from '../../assets/spain.png';
import english from '../../assets/united-kingdom.png'
import { CharactersContext } from '../../shared/characters.context';
import ReactAudioPlayer from 'react-audio-player';
import song from '../../assets/sounds/starwars.mp3'


const Home = () => {

  const { lngs } = useContext(CharactersContext);
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const unregister = i18n.on('languageChanged', (lng) => {
      setLanguage(lng);
      
    });
  }, []);

  return (
    <div className='home'>
        <div className='language'>
        {Object.keys(lngs).map((lng, index) =>{
            return (
              lngs[lng].nativeName === 'English' ? <img key={index} className='flags' onClick={() => i18n.changeLanguage(lng)} src={english} alt='home' /> : <img key={index} className='flags' onClick={() => i18n.changeLanguage(lng)} src={spanish} alt='star'/>
            )
          })} 
        </div>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
        <Menu />
    </div>
  )
}

export default Home
