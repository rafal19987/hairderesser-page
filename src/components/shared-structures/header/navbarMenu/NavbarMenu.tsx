'use client';

import Link from 'next/link';
import NavbarMenuItem from './NavbarMenuItem';
import navigationRoutes from '@/helpers/routes/navigationRoutes';

const NavbarMenu = () => {
  return (
    <ul className='flex items-center gap-4 justify-between w-full h-full text-white lg:text-lg'>
      {/*       <li className="relative">
        <Link
          className={`relative hover:text-[var(--gold)] after:absolute after:-bottom-2 after:left-0   after:content-[''] after:h-1 after:bg-[var(--gold)] after:transition-all transition-all duration-300 ${
            pathname === '/'
              ? 'after:w-full text-[var(--gold)]'
              : 'after:w-0 text-white'
          }`}
          href="#"
        >
          Strona główna
        </Link>
      </li> */}
      {navigationRoutes.map((route) => (
        <NavbarMenuItem
          key={route.routeName}
          routeName={route.routeName}
          route={route.route}
        />
      ))}
    </ul>
  );
};

export default NavbarMenu;
