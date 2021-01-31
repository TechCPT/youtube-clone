import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h3>Recommended</h3>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="Learn React JS - Full Course for Beginners - Tutorial 2019"
                    views="2.3M views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                    channel="freeCodeCamp.org"
                    image="https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD4APkUElCjtEvoxh3NaiVNE8Y5w"
                />
                <VideoCard 
                    title="Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks"
                    views="435K views"
                    timestamp="3 months ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                    channel="freeCodeCamp.org"
                    image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLK29q76SFGKEvn0XvC6Zk3kGV1w"
                />
                <VideoCard 
                    title="React JS Crash Course (2019)"
                    views="1.5M views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwng963DN2_MIbKuvMWRrN4KG920h3Y4YHg6KET9vZg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Traversy Media"
                    image="https://i.ytimg.com/vi/sBws8MSXN7A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcUMnb-x-ByI6CD5HCbRbPTeAUog"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;