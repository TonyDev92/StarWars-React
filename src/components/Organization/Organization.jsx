import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import homeIcon from '../../assets/home-icon.png';
import icon from '../../assets/back-icon.png';

const Organization = ({organization}) => {

  const navigate = useNavigate();

  return (
     <div className='characterdetail'>
      <div className='characterdetail__nav'>
        <div onClick={() => navigate('/organizations')} className='characterdetail__nav--back'>
          <img src={icon} alt='back'></img>
          <span className='characterdetail__nav--text'>BACK</span>
        </div>
        <div className='characterdetail__nav--to'>
          <Link to='/'>
            <img src={homeIcon} alt='home_icon-img'></img>
          </Link>
        </div>
      </div>

      <div className='detailcontainer'>
        <div className='detailcontainer__img'>
          <img src={organization.image} alt={organization.name}></img>
        </div>
        <div className='detailcontainer__context'>
          <h1>{organization.name}</h1>
          <div className='detailcontainer__context--scrll'>
            <div className='detailcontainer__context--P'>
              <p> {organization.description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization;
