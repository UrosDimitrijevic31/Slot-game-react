import './PLayBtn.scss';
import spin_visible from '../../../assets/images/spin_visible.png'

const PlayBtn = () => {
    return(
        <div className='play-btn'>
            <img src={spin_visible} alt="play-button"/>
        </div>
    )
}

export default PlayBtn;