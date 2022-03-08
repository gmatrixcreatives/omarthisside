import type {NextComponentType} from 'next';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../images/logo.png';

const Navbar: NextComponentType = () => {
	return (
		<>
			<header className='bg-black sticky w-full'>
				<div className='innerDiv'></div>
			</header>
		</>
	);
};

export default Navbar;
