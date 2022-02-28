import React from 'react';
import './GameControls.scss';
import addBtn from '../../assets/images/addBtn.png'
import minusBtn from '../../assets/images/minusBtn.png'
import betMax from '../../assets/images/betMax.png'
import betOne from '../../assets/images/betOne.png'
import spin_visible from '../../assets/images/spin_visible.png'

const GameControls = () => {
    return(
        <div className="bottom">
            <div className='left-side'>
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
                <div className='bet-one-max-container'>
                    <div className="setBet">
                        <img src={betOne} alt="" />
                    </div>
                    <div className="setBet">
                        <img src={betMax} alt="" />
                    </div>
                </div>
                
            </div> 
            {/* end left side */}
            
            <div className='middle'>
                <div className='play-btn'>
                        <img src={spin_visible} alt="play-button"/>
                </div>
            </div>
            {/* end middle */}

            <div className='right-side'>
                <div className='win-container'>
                    <div className='display-win'>
                        <span className='value'>24.00</span>
                        <hr />
                        <span className='label'>WIN</span>
                    </div>
                </div>
                <div className='balance-container'>
                    <div className='display-balance'>
                        <span className='value'>165256.12</span>    
                        <hr />
                        <span className='label'>BALANCE</span>
                    </div>
                </div>
            </div>
            {/* end right side */}
        </div>
    )    
}

export default GameControls;