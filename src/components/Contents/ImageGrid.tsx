interface ImageGridProps {
  imageData: Array<{ id: string; urls: { small: string } }>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ imageData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imageData.map((image) => (
        <img key={image.id} src={image.urls.small} alt='Image' />
      ))}
    </div>
  );
};

export default ImageGrid;
