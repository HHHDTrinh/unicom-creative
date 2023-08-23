'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/all';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import HoverButton from './HoverButton';

gsap.registerPlugin(CSSRulePlugin);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const pathRef = useRef();
  const menuRef = useRef();
  const btnRef = useRef();
  const overlayRef = useRef();
  const queryEl = gsap.utils.selector(menuRef);
  const btnEl = gsap.utils.selector(btnRef);
  const [toggleMobile, setToggleMobile] = useState(false);

  //GSAP Variables
  const timeline = gsap.timeline({ paused: true });
  const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
  const end = 'M0,1005S175,995,500,995s500,5,500,5V0H0Z';

  const handleOpenMenu = () => {
    setToggleMobile((prev) => !prev);
    handleAnimateOpenMenu();
    timeline.reversed(!timeline.reversed());
  };

  const handleCloseMenu = () => {
    setToggleMobile((prev) => !prev);
    handleAnimateCloseMenu();
    timeline.reversed(!timeline.reversed());
  };

  const handleAnimateOpenMenu = () => {
    timeline
      .to(overlayRef.current, 0.5, {
        display: 'block',
      })
      .to(
        pathRef.current,
        1,
        {
          attr: {
            d: start,
          },
          ease: 'power2.easeIn',
        },
        '<'
      )
      .to(
        pathRef.current,
        1,
        {
          attr: {
            d: end,
          },
          ease: 'power2.easeOut',
        },
        '-=0.5'
      )
      .to(
        menuRef.current,
        1,
        {
          visibility: 'visible',
        },
        '-=0.5'
      )
      .to(
        queryEl('.menu-item > a'),
        0.6,
        {
          top: 0,
          ease: 'power3.out',
          stagger: {
            amount: 0.5,
          },
        },
        '-=1'
      )
      .to(
        queryEl('.menu .primary-menu div.active-link img'),
        0.5,
        {
          opacity: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        queryEl('.menu .primary-menu a.active-link'),
        0.5,
        {
          right: 0,
          color: '#edf82d',
          ease: 'power3.out',
        },
        '-=1'
      )
      .to(
        btnEl('div >  *'),
        0.6,
        {
          top: 0,
          ease: 'power3.out',
          stagger: {
            amount: 0.5,
          },
        },
        '<'
      )
      .reverse();
  };

  const handleAnimateCloseMenu = () => {
    timeline
      .to(queryEl('.menu .primary-menu div.active-link img'), 0.4, {
        opacity: 0,
        ease: 'power3.out',
      })
      .to(queryEl('.menu .primary-menu a.active-link'), 0.8, {
        right: '10%',
        color: '#fff',
        ease: 'power3.out',
      })
      .to(
        queryEl('.menu-item > a'),
        0.6,
        {
          top: 120,
          ease: 'power3.out',
          stagger: {
            amount: 0.5,
          },
        },
        '>+0.5'
      )
      .to(
        btnEl('div >  *'),
        0.6,
        {
          top: 150,
          ease: 'power3.out',
          stagger: {
            amount: 0.5,
          },
        },
        '>-1'
      )
      .to(
        menuRef.current,
        1,
        {
          visibility: 'hidden',
        },
        '>-0.1'
      )
      .to(
        pathRef.current,
        1,
        {
          attr: {
            d: end,
          },
          ease: 'power2.easeIn',
        },
        '>-1.25'
      )
      .to(
        pathRef.current,
        1,
        {
          attr: {
            d: start,
          },
          ease: 'power2.easeIn',
        },
        '<'
      )
      .to(
        pathRef.current,
        1,
        {
          attr: {
            d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z',
          },
          ease: 'power2.easeOut',
        },
        '-=0.5'
      )
      .to(
        overlayRef.current,
        0.5,
        {
          display: 'none',
        },
        '>'
      )
      .reverse();
  };

  //Normal function
  const handleNavigate = (e, path) => {
    e.preventDefault();
    if (path !== '/') {
      handleCloseMenu();
      router.push(path);
    } else {
      if (toggleMobile) {
        handleCloseMenu();
        router.push(path);
      } else {
        router.push(path);
      }
    }
  };

  useLayoutEffect(() => {
    if (toggleMobile) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [toggleMobile]);

  return (
    <nav className='absolute left-0 right-0 top-[3.2%] z-[1]'>
      <div className='max_container relative z-[2]'>
        <a
          onClick={(e) => handleNavigate(e, '/')}
          style={{
            width: '210.22px',
            height: '62.5px',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <Image
            src={`${
              toggleMobile
                ? '/assets/icons/logo-active.svg'
                : '/assets/icons/logo.svg'
            }`}
            alt='logo'
            className='object-contain'
            fill
          />
        </a>
        <button
          className='flex-center gap-2'
          onClick={toggleMobile ? handleCloseMenu : handleOpenMenu}
        >
          <p
            className={`font-darker text-[32px] font-semibold leading-[43.39px] ${
              toggleMobile ? 'text-white' : 'text-[#282866]'
            }`}
          >
            {toggleMobile ? 'Close' : 'Menu'}
          </p>
          <div id='hamburger' className={toggleMobile ? 'active' : ''}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className='overlay' ref={overlayRef}>
        <svg viewBox='0 0 1000 1000'>
          <path ref={pathRef} d='M0 2S175 1 500 1s500 1 500 1V0H0Z'></path>
        </svg>
      </div>
      <div className='menu max_container font-darker' ref={menuRef}>
        <div className='primary-menu'>
          <div className='menu-container'>
            <div className='wrapper'>
              <div
                className={`${
                  pathname == '/about' ? 'active-link' : ''
                } menu-item relative flex gap-4`}
              >
                <Image
                  src='/assets/icons/arrow-right.svg'
                  alt='menu-arrow'
                  width={77}
                  height={77}
                  style={{ width: 77, height: 77 }}
                />
                <a
                  className={pathname == '/about' ? 'active-link' : ''}
                  onClick={(e) => handleNavigate(e, '/about')}
                >
                  About
                </a>
                <div className='menu-item-revealer'></div>
              </div>
              <div
                className={`${
                  pathname == '/funding-options' ? 'active-link' : ''
                } menu-item relative flex gap-4`}
              >
                <Image
                  src='/assets/icons/arrow-right.svg'
                  alt='menu-arrow'
                  width={77}
                  height={77}
                  style={{ width: 77, height: 77 }}
                />
                <a
                  className={
                    pathname == '/funding-options' ? 'active-link' : ''
                  }
                  onClick={(e) => handleNavigate(e, '/funding-options')}
                >
                  Funding Options
                </a>
                <div className='menu-item-revealer'></div>
              </div>
              <div
                className={`${
                  pathname == '/referral-engine' ? 'active-link' : ''
                } menu-item relative flex gap-4`}
              >
                <Image
                  src='/assets/icons/arrow-right.svg'
                  alt='menu-arrow'
                  width={77}
                  height={77}
                  style={{ width: 77, height: 77 }}
                />
                <a
                  className={
                    pathname == '/referral-engine' ? 'active-link' : ''
                  }
                  onClick={(e) => handleNavigate(e, '/referral-engine')}
                >
                  Refferal Engine
                </a>
                <div className='menu-item-revealer'></div>
              </div>
              <div
                className={`${
                  pathname == '/contact' ? 'active-link' : ''
                } menu-item relative flex gap-4`}
              >
                <Image
                  src='/assets/icons/arrow-right.svg'
                  alt='menu-arrow'
                  width={77}
                  height={77}
                  style={{ width: 77, height: 77 }}
                />
                <a
                  className={pathname == '/contact' ? 'active-link' : ''}
                  onClick={(e) => handleNavigate(e, '/contact')}
                >
                  Contact
                </a>
                <div className='menu-item-revealer'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='secondary-menu relative bottom-[5%] z-[3] self-start 3xl:w-[56%] 5xl:w-[67%]'>
          <div className='flex justify-between'>
            <div className='btn menu-item font-dmsans' ref={btnRef}>
              <HoverButton isDefault />
            </div>
            <div className='list flex flex-col font-darker'>
              <div className='menu-item'>
                <a
                  className='text-[44.73px] font-semibold leading-[60.65px] text-white'
                  href='#'
                >
                  LinkedIn
                </a>
                <div className='menu-item-revealer'></div>
              </div>
              <div className='menu-item'>
                <a
                  className='text-[44.73px] font-semibold leading-[60.65px] text-white'
                  href='#'
                >
                  Instagram
                </a>
                <div className='menu-item-revealer'></div>
              </div>
              <div className='menu-item'>
                <a
                  className='text-[44.73px] font-semibold leading-[60.65px] text-white'
                  href='#'
                >
                  Twitter
                </a>
                <div className='menu-item-revealer'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
