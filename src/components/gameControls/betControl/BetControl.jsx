import './BetControl.scss';
import addBtn from '../../../assets/images/addBtn.png'
import minusBtn from '../../../assets/images/minusBtn.png'

const BetControl = () => {
    return (
        <div className="bet-control">
            <div className='change-bet'>
                <img src={minusBtn} alt="minus" />
            </div>
            <div className='display-bet'>
                <span className='value'>10.00</span>
                <hr />
                <span className='label'>BET</span>
            </div>
            <div className='change-bet'>    
                <img src={addBtn} alt="plus" />
            </div>
        </div>
    )
}

export default BetControl;