'use client';

import Container from '@/app/layouts/Container';
import Link from 'next/link';
import { MENU, FLAGS } from '@/lib/constants';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Header = () => {
  const [showHideMenu, setShowHideMenu] = useState(false);

  return (
    <header className={'min-h-[60px] md:leading-[60px] z-10 relative'}>
      <Container>
        <div className={'md:flex justify-between items-center gap-5 w-full'}>
          {/*LOGO*/}
          <div className={'flex justify-between items-center py-3 md:py-0'}>
            <Link href={'/'} className={'text-2xl font-bold text-sky-600'}>
              ScorIt
            </Link>

            {showHideMenu ? (
              <IoMdClose
                className={'text-xl cursor-pointer md:hidden'}
                onClick={() => setShowHideMenu(!showHideMenu)}
              />
            ) : (
              <FaBars
                className={'text-xl cursor-pointer md:hidden'}
                onClick={() => setShowHideMenu(!showHideMenu)}
              />
            )}
          </div>

          {/*MENU*/}
          <nav className={showHideMenu ? 'md:block py-3' : 'hidden md:block'}>
            <ul className={'md:flex gap-2 py-4 md:py-0'}>
              {/*MENU LINKS*/}
              {MENU.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={'px-0 md:px-2 md:py-0 py-2 md:text-white md:hover:text-slate-100 duration-100 leading-[1rem] md:leading-none'}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}

              {/*DOWNLOAD*/}
              <li className={'md:ml-2 md:mt-0 mt-6'}>
                <Link
                  href={'#footer'}
                  className={
                    'py-[10px] md:mx-3 px-5 shadow-md rounded-xl md:bg-white bg-sky-600 text-black hover:text-white hover:bg-sky-600 font-semibold uppercase'
                  }
                >
                  Download
                </Link>
              </li>

              {/*LANGUAGES*/}
              <div className={'flex md:justify-end items-center gap-2 mt-5 md:mt-0'}>
                {FLAGS.map((item, index) => (
                  <Image
                    key={index}
                    src={item.img}
                    alt={item.title}
                    width={40}
                    height={40}
                    className={' cursor-pointer'}
                    onClick={() => {
                      console.log('hello');
                    }}
                  />
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
