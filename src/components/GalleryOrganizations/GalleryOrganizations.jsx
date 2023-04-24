import React from 'react'
import { useNavigate } from 'react-router';

const GalleryOrganizations = (org) => {
    const props = org.params;
    const navigate = useNavigate();

    const goToOrgDetail = (e, index) => {
        navigate('organization-detail', {state: {element : e}});
      }   
    

    return (
        <div className='container'>
            {props.map((e, index) => <div className='container_char' key={index}>
                <div className='container_char-img'>
                    <img onClick={() => goToOrgDetail(e, index)} src={e.image} alt={e.name}></img>
                </div>
                <div className='container_char-name'>
                    <p>{e.name}</p>
                </div>
            </div>
            )}
        </div>
    )
}

export default GalleryOrganizations
