import Nav from '../Header/Nav';
import Search from '../Header/Search';
import Button from '../Button';
import Icon from '../../assets/icon.svg';

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center border-b border-slate-200 p-3'>
        <div className='flex items-center gap-3'>
          <img src={Icon} alt='Icon' width={50} />
          <Search />
        </div>
        <div className='flex items-center gap-7'>
          <Button buttonName='Login' buttonStyle='text-white bg-primary rounded-md px-8 py-2' />
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
