 import React from 'react';
 import { connect } from 'react-redux';
 import { selectSong } from '../actions';

 const SongsDetail = ({song}) => {
    if (!song) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details:</h3>
            <p>{song.title}<br/>{song.duration}</p>
        </div>
    );

 }

const mapStateToProps = state => {
    return { song: state.selectedSong };
}

 export default connect(mapStateToProps, { selectSong })(SongsDetail);