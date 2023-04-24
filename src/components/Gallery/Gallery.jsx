import './Gallery.css';
import { useNavigate } from 'react-router';

const Gallery = (charact) => {
  const props = charact.props
  const navigate = useNavigate();
  
  const goToCharDetail = (e, index) => {
    navigate('character-detail', {state: {element : e}});
  }   

  return (
    <div className='container'>
    {props.map((e, index) =><div className='container_char glow' key={index}>
      <div className='container_char-img'>
        <img onClick={() => goToCharDetail(e, index)} src={e.image} alt={e.name}></img>
      </div>
      <div className='container_char-name'>
        <p>{e.name}</p>
      </div>
    </div>
    )}
    </div>
  )
}

export default Gallery
