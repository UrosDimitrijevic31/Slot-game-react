import React from 'react';
import './GameControls.scss';

const GameControls = () => {
    return(
        <div className="bottom">
            <div className="one-bet">
                One bet
            </div>
            <div className="max-bet">
                Max bet
            </div>
            <div className="bet-control">
                <button>add</button>
                <div>
                    10.00
                    <hr />
                    BET
                </div>
                <button>minus</button>
            </div>
            <div>
                <div>
                    <img src="" alt="play-button"/>
                </div>
            </div>
            <div>
                <div>
                    24.00
                    <hr />
                    win
                </div>
            </div>
            <div>
                <div>
                    165256.12
                    <hr />
                    balance
                </div>
            </div>
        </div>
    )    
}

export default GameControls;