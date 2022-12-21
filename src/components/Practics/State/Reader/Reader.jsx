import React from 'react';
import { Progress } from './Progress/Progress';
import { Controls } from './Control/Control';
import { Publications } from './Publications/Publications';
const LS_KEY = 'reader_item_index';
export class Reader extends React.Component {
  state = {
    publicationIndex: 0,
  };
  changeIndex = value => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + value,
    }));
  };
  componentDidUpdate(_, pravState) {
    if (pravState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.publicationIndex));
    }
  }
  componentDidMount() {
    const localIndex = localStorage.getItem(LS_KEY);
    if (localIndex) {
      this.setState({ publicationIndex: Number(localStorage.getItem(LS_KEY)) });
    }
  }
  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const currentItem = items[publicationIndex];
    const itemsLength = items.length;
    const value = publicationIndex + 1;
    return (
      <div>
        <Controls
          current={value}
          total={itemsLength}
          onChange={this.changeIndex}
        />
        <Progress value={value} itemsLength={itemsLength} />
        <Publications item={currentItem} />
      </div>
    );
  }
}
