import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StyledPlaylistitems from '../styles/StyledPlaylistitems';

const PlaylistItems = ({ videos, active }) => (
    <StyledPlaylistitems>
        {videos.map(video => (
            <PlaylistItem key={video.id}
                video={video}
                active={video.id === active.id}
                played={video.played}
            ></PlaylistItem>
        ))}
    </StyledPlaylistitems>
);

export default PlaylistItems;
