import { Link } from 'react-router-dom';
import { Modal } from 'components/Practics';
import React from 'react';
export class MaterialCard extends React.Component {
  state = {
    showModal: false,
    title: '',
    link: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <p>
          <b> Название :</b>
          {item.title}
        </p>
        <Link>
          <b>Ссылка:</b>
          {item.link}
        </Link>
        <button type="button" onClick={this.toggleModal}>
          Изменить
        </button>
        <button
          type="button"
          onClick={() => {
            onDelete(item.id);
          }}
        >
          Удалить
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <form>
              <label>
                Title
                <input
                  name="title"
                  value={this.title}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Link
                <input
                  type="text"
                  name="link"
                  value={this.link}
                  onChange={this.handleChange}
                />
              </label>

              <button
                type="button"
                onClick={() => {
                  onUpdate({
                    id: item.id,
                    title: this.state.title,
                    link: this.state.link,
                  });
                  this.toggleModal();
                }}
              >
                Редактировать
              </button>
            </form>
          </Modal>
        )}
        <hr />
      </>
    );
  }
}
