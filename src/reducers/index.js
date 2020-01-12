import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'spo mha', duration: '2:30'},
        {title: 'rrugaqo', duration: '3:03'},
        {title: 'dream', duration: '4:34'},
        {title: 'psimfoni', duration: '4:26'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED' ){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers( {
    songs: songsReducer,
    selectedSong: selectedSongReducer
});