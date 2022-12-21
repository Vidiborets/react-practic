import React from 'react';
export class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  };
  secActiveIndex = index => {
    this.setState({
      activeIndex: index,
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeIndex !== this.state.activeIndex;
  }

  render() {
    const activeTab = this.props.items[this.state.activeIndex];
    return (
      <>
        <div>
          {this.props.items.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => this.secActiveIndex(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
