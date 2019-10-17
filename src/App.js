import React from "react";

import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail, VideoList } from "./components"

import youtube from "./api/youtube"

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { 
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyDXKVNum0htJyrEy_goWCz87eLFn15M_sM",
                q: searchTerm,
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    render(){
        const { selectedVideo, videos } = this.state
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={10}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;