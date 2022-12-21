import { Box } from 'components/Box/Box';
import React from 'react';
import { Player } from './Player/Player';
import { VideoList } from './VideoList/VideoList';
import videos from '../../../../data/videos';
export class ExtendsPlayer extends React.Component {
  state = {
    videoSelected: null,
  };
  selectedVideo = link => {
    this.setState({
      videoSelected: link,
    });
  };
  render() {
    return (
      <Box>
        <h1>Selected video: {this.state.videoSelected}</h1>
        <VideoList videos={videos} onSelect={this.selectedVideo} />
        <Player url={this.state.videoSelected} />
      </Box>
    );
  }
}
