import React from 'react';

import {Grid} from "@material-ui/core";

import VideoItem from "./VideoItem"
const VideoList = ({ videos }) => {
    const listOfVids = videos.map((video, id) => <VideoItem key={id}/>)
    return listOfVids;
}

export const VideoList;