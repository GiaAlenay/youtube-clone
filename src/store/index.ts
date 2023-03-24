import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";

const initialState: InitialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
  };

const YoutubeSlice=createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{}

    
})