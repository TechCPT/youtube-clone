import React from "react";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>

            <hr />

            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="freeCodeCamp.org"
                verified
                subs="3.09M"
                noOfVideos={1231}
                description="Learn to code for free."
            />

            <hr />

            <VideoRow 
                image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLK29q76SFGKEvn0XvC6Zk3kGV1w"
                title="Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks"
                views="435K"
                timestamp="3 months ago"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="freeCodeCamp.org"
                verified
                description="Learn the basics of React in this comprehensive course. You will learn about fundamentals, hooks, context API, react router, custom hooks, and more."
            />

        </div>
    );
}

export default SearchPage;