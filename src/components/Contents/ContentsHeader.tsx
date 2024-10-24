import Heart from '../../assets/image.svg';

const ContentsHeader = () => {
  return (
    <div className='flex w-full h-[70vh]'>
      <div className='flex flex-col justify-center gap-1 pl-7 w-[50%]'>
        <h1 className='text-primary text-5xl font-bold'>Integrated Unsplash API</h1>
        <h3 className='text-slate-400 text-2xl'>Discover photos and save the ones that inspires</h3>
        <p className='text-sm pt-7'>Built with React Vite, Tailwind CSS and integrated Unsplash API</p>
      </div>
      <div className='flex justify-center items-center w-[50%]'>
        <img src={Heart} alt='Image' width={400} />
      </div>
    </div>
  );
};

export default ContentsHeader;
