import { useState, useEffect } from 'react';
import api from '../api/api';
import Header from '../components/Header/Header';
import ContentsHeader from '../components/Contents/ContentsHeader';
import ImageGrid from '../components/Contents/ImageGrid';

const Hero = () => {
  const [imageData, setImageData] = useState<Array<{ id: string; urls: { small: string } }>>([]);

  useEffect(() => {
    api
      .get('/api/photos')
      .then((res) => {
        setImageData(res.data);
        console.log('res', res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <ContentsHeader />
      <ImageGrid imageData={imageData} />
    </div>
  );
};

export default Hero;
