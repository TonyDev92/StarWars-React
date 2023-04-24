import React, { useContext, useEffect, useState } from 'react';
import { CharactersContext } from '../../shared/characters.context';
import Menu from '../../components/Menu/Menu';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home-icon.png';
import lupa from '../../assets/lupa.png';
import GalleryOrganizations from '../../components/GalleryOrganizations/GalleryOrganizations';
import i18n from '../../i18n';
import spanish from '../../assets/spain.png';
import english from '../../assets/united-kingdom.png'

const Organizations = () => {
    const { organizations } = useContext(CharactersContext);
    const [ filteredOrganizations, setFilteredOrganizations] = useState([]);
    const { lngs } = useContext(CharactersContext);
    const [language, setLanguage] = useState(i18n.language);

    const onFilter = (e) => {
        const filterOrg = organizations.filter((organization) => organization.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredOrganizations(filterOrg);
    }

    useEffect(() => {
        setFilteredOrganizations(organizations);
    }, [organizations] )

    useEffect(() => {
        const unregister = i18n.on('languageChanged', (lng) => {
          setLanguage(lng);
        });
      }, []);

    return (
        <div className='container-characters'>
            <div className='searcher'>
                <div className='searcher_input'>
                    <input onChange={(e) => onFilter(e)} className='searcher_input-inp' type='text' placeholder='Search...' />
                    <img className='input-lupa' src={lupa} alt='lupa' />
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
                <GalleryOrganizations params={filteredOrganizations}></GalleryOrganizations>
                <Menu></Menu>
            </div>
        </div>
    )
}

export default Organizations;
