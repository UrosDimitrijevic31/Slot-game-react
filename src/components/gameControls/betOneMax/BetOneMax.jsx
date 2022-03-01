import './BetOneMax.scss';
import betMax from '../../../assets/images/betMax.png'
import betOne from '../../../assets/images/betOne.png'

const BetOneMax = () => {
    return (
        <div className='bet-one-max-container'>
            <div className="setBet">
                <img src={betOne} alt="" />
            </div>
            <div className="setBet">
                <img src={betMax} alt="" />
            </div>
        </div>
    )
} 

export default BetOneMax;