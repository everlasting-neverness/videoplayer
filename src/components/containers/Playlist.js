import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlaylist>
        <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode}></NightMode>
        <PlaylistHeader active={active} total={videos.length}></PlaylistHeader>
        <PlaylistItems videos={videos} active={active}></PlaylistItems>
    </StyledPlaylist>
);

export default Playlist;
