import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ items, onClick }) => (
  <List>
    {items.map(item => {
      return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />;
    })}
  </List>
);
