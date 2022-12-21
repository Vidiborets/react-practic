import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onClick }) => {
  const fullImage = () => onClick(item.largeImageURL);
  return (
    <Item>
      <Image src={item.webformatURL} alt={item.tag} onClick={fullImage} />
    </Item>
  );
};
