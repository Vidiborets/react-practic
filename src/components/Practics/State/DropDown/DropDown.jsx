import React from 'react';
import { DropBox, DropDownBox } from './DropDown.styled';
export class DropDown extends React.Component {
  state = {
    visible: false,
  };
  toogle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };
  render() {
    return (
      <DropBox>
        <button onClick={this.toogle} type="button">
          {this.state.visible ? 'Скрыть' : 'Показать'}
        </button>
        {/* <button onClick={this.show} type="button">
          Показать
        </button>
        <button onClick={this.hide} type="button">
          Скрыть
        </button> */}
        {this.state.visible && <DropDownBox>Выпадающее меню</DropDownBox>}
      </DropBox>
    );
  }
}
