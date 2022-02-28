import React, { useEffect, useState } from "react";
import Reel from "../reel/Reel";
import './ReelsContainer.scss';

const ReelsContainer = () => {
    const numberOfReels = 3;
    const [reelArray, setReelArray] = useState([]);
    let helperArray = [];

    function createReels() {
        for (let i = 0; i < numberOfReels; i++) {
            helperArray.push(<Reel/>)
        }
        setReelArray(helperArray)
    }

    useEffect(() => {
        createReels()
    },[])


    const reels = reelArray.map(() => {
        return (
            <Reel/>
        )
    })
    
    return(
        <div className="reels-container">
            {reels}
        </div>
    )
}

export default ReelsContainer;