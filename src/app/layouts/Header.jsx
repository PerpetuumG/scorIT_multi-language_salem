'use client';

import Container from '@/app/layouts/Container';
import Link from 'next/link';
import { MENU, FLAGS } from '@/lib/constants';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={'min-h-[60px] md:leading-[60px] z-10 relative bg-slate-300'}>
      <Container>
        <div className={'md:flex justify-between items-center gap-5 w-full'}>
          {/*LOGO*/}
          <div className={'flex justify-between items-center py-3 md:py-0'}>
            <Link href={'/'} className={'text-2xl font-bold text-sky-600'}>
              ScorIt
            </Link>
          </div>

          {/*MENU*/}
          <nav>
            <ul className={'md:flex gap-2 py-4 md:py-0'}>
              {/*MENU LINKS*/}
              {MENU.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={'px-0 md:px-2 md:py-0 py-2 leading-[1rem] md:leading-none'}
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
              <div className={'flex justify-end items-center gap-2'}>
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
