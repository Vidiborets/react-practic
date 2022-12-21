import React from 'react';
import { ReactWraper, Styledlayer } from './Player.styled';
export class Player extends React.Component {
  state = { isVideoLoaded: false };
  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        isVideoLoaded: false,
      });
    }
  }
  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;
    const isShowLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;
    return (
      <>
        {isShowLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <ReactWraper>
            <Styledlayer
              width={playerSize}
              height={playerSize}
              url={url}
              onReady={() => this.setState({ isVideoLoaded: true })}
              controls
            />
          </ReactWraper>
        )}
      </>
    );
  }
}
