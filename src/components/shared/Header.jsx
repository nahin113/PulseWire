import logo from '@/assets/logo.png'
import Image from 'next/image';
import {format } from "date-fns";

const Header = () => {
    return (
      <div className='text-center py-10 space-y-4'>
        <Image src={logo} width={471} height={60} alt="Logo" className='mx-auto'/>
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE,MMMM dd,yyyy")}</p>
      </div>
    );
};

export default Header;