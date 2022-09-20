import type {NextComponentType} from 'next';
import Image from 'next/image';
import Link from 'next/link';
const Navbar: NextComponentType = () => {
	return (
		<>
		<header className='bg-black py-4'>
        <div className='innerDiv mx-auto 2xl:px-0 xl:px-[80px] lg:px-[80px] md:px-[60px] xs:px-[10px]'>
          <div className='flex justify-between items-center'>
            <a className='text-white inline-block'>
              <i class='fa-solid fa-microphone'></i>
              <span className='font-[600] ml-2 sm:text-base text-xs'>Introduction to Psychology</span>
            </a>
            <div>
                <a className="bg-primary py-2 sm:px-5 px-3 rounded-[10px] text-black font-[600] inline-block sm:text-base text-xs">Publish</a>
                <i class='fa-solid fa-times text-white ml-2'></i>
            </div>
          </div>
        </div>
      </header>
		</>
	);
};

export default Navbar;
