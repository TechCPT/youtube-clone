import React from "react";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from '@material-ui/icons/CheckCircle';
import "./VideoRow.css";

function VideoRow({ image, title, views, timestamp, channelImage, channel, verified, description }) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{views} views • {timestamp}</p>
                <p className="videoRow__channel">
                    <Avatar className="videoRow__logo" 
                        src={channelImage} 
                        alt={channel} 
                    />
                    <span className="channelName">{channel}</span>
                    <span className="videoRowVerifiedIcon">{verified && <VerifiedIcon />}</span>
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    );
}

export default VideoRow;