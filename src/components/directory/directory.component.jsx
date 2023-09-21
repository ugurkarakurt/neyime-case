import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'UEFA Şampiyonlar Ligi',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'bulletin/UEFA Şampiyonlar Ligi'
  },
  {
    id: 2,
    title: 'UEFA Avrupa Ligi',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'bulletin/UEFA Avrupa Ligi'
  },
  {
    id: 3,
    title: 'Premier League',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'bulletin/Premier League'
  },
  {
    id: 4,
    title: 'İspanya La Liga',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'bulletin/İspanya La Liga'
  },
  {
    id: 5,
    title: 'İtalya Serie A',
    imageUrl: '../../assets/seria_a_logo.png',
    route: 'bulletin/İtalya Serie A'
  },
  {
    id: 6,
    title: 'Türkiye Süper Ligi',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'bulletin/Türkiye Süper Ligi'
  },
  {
    id: 7,
    title: 'Almanya Bundesliga',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'bulletin/Almanya Bundesliga'
  },
];

const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
