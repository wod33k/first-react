import React from 'react';


const MainPost  = props => {

    return (
            <div className="mainPost">
                <div className="mainPostImg"> 
                    <img ></img>
                </div>
                <div className="mainPostText">
                    <p className="mainPostQute">{props.mainPostText}</p>
                </div>
              </div>

    )


}

export default MainPost;