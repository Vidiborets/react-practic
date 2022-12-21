import React from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMore } from '../LoadMore/LoadMore';
import { Modal } from 'components/Practics';
import pixabayApi from 'services/pixabay';
import { Loading } from '../Loading/Loading';
export class ImageDataView extends React.Component {
  state = {
    items: [],
    error: null,
    status: 'idle',
    page: 1,
    showModal: false,
    largeImage: '',
  };
  handleClick = () => {
    this.setState({ status: 'pending' });
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'resolved',
    }));
  };
  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    if (prevProps.value !== this.props.value) {
      this.setState({ status: 'pending' });
      pixabayApi
        .fetchPictures(this.props.value, this.state.page)
        .then(res => {
          this.setState({
            items: res.hits,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error }));
    }
    if (prevState.page !== page) {
      pixabayApi
        .fetchPictures(this.props.value, this.state.page)
        .then(res => {
          this.setState(prevState => ({
            items: [...prevState.items, ...res.hits],
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }
  largeImage = largeImageURL => {
    this.setState({ largeImage: largeImageURL, showModal: true });
  };

  render() {
    const { status, items, largeImage, showModal } = this.state;

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery items={items} onClick={this.largeImage} />

          <LoadMore onClick={this.handleClick} />
          {showModal && (
            <Modal onClose={this.toogleModal}>
              <img src={largeImage} alt="" />
            </Modal>
          )}
        </>
      );
    }
    if (status === 'pending') {
      return <Loading />;
    }
  }
}
