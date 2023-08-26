'use client';
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CSSRulePlugin, ScrollToPlugin } from 'gsap/all';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import HoverButton from './HoverButton';

gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin);

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const haveWrapper =
    pathname === '/' ||
    pathname === '/about' ||
    pathname === '/funding-options' ||
    pathname === '/referral-engine' ||
    pathname === '/contact';

  const pathRef = useRef();
  const menuRef = useRef();
  const btnRef = useRef();
  const navRef = useRef();
  const overlayRef = useRef();
  const queryEl = gsap.utils.selector(menuRef);
  const btnEl = gsap.utils.selector(btnRef);
  const navEl = gsap.utils.selector(navRef);
  const [toggleMenu, setToggleMenu] = useState(false);

  //GSAP Variables
  const timeline = gsap.timeline({ paused: true });
  const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
  const end = 'M0,1005S175,995,500,995s500,5,500,5V0H0Z';

  const handleOpenMenu = () => {
    setToggleMenu((prev) => !prev);
    handleAnimateOpenMenu();
    timeline.reversed(!timeline.reversed());
  };

  const handleCloseMenu = () => {
    setToggleMenu((prev) => !prev);
    handleAnimateCloseMenu();
    timeline.reversed(!timeline.reversed());
  };

  const handleAnimateOpenMenu = () => {
    timeline
      .to(overlayRef.current, 0.5, {
        display: 'block',
      })
      .set(
        '.hide-on-menu > *',
        {
          opacity: 0,
          cursor: 'default',
          ease: 'power3.easeOut',
        },
        '<'
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
    const element = document.querySelector('.active-link');
    if (element) {
      timeline
        .to(queryEl('.menu .primary-menu div.active-link img'), 0.4, {
          opacity: 0,
          ease: 'power3.out',
        })
        .to(
          queryEl('.menu .primary-menu a.active-link'),
          0.8,
          {
            right: '10%',
            color: '#fff',
            ease: 'power3.out',
          },
          '<'
        );
    }
    timeline
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
        element ? '>+=0.5' : '+=0.6'
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
      .set(
        '.hide-on-menu > *',
        {
          opacity: 1,
          cursor: 'auto',
          ease: 'power3.easeOut',
        },
        '<-0.2'
      )
      .set(
        '.hide-on-menu > span',
        {
          cursor: 'pointer',
          ease: 'power3.easeOut',
        },
        '<'
      )
      .play()
      .reverse();
  };

  const handleScrollToGrants = () => {
    const sectionGrants = document.querySelector('#section-grants');
    gsap.to(window, {
      duration: 2,
      scrollTo: sectionGrants,
    });
  };

  //Normal function
  const handleNavigate = (e, path) => {
    e.preventDefault();
    if (path !== '/') {
      handleCloseMenu();
      router.push(path);
    } else {
      if (toggleMenu) {
        handleCloseMenu();
        router.push(path);
      } else {
        router.push(path);
      }
    }
  };

  useLayoutEffect(() => {
    if (toggleMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [toggleMenu]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({ repeat: -1 })
        .to(navEl('svg.arrow-jump'), {
          marginBottom: 10,
          ease: 'power2.easeIn',
          duration: 0.6,
        })
        .to(navEl('svg.arrow-jump'), {
          marginBottom: 0,
          ease: 'power2.easeOut',
          duration: 0.6,
        });
    }, navRef);

    return () => ctx.revert();
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.timeline().to(
        '.hide-on-menu',
        {
          display: 'flex',
          ease: 'power2.easeIn',
        },
        '2.5'
      );
    }, navRef);

    return () => ctx.revert();
  });

  return haveWrapper ? (
    <nav
      className={`${
        pathname === '/contact' || pathname === '/referral-engine'
          ? 'have-shadow'
          : ''
      } absolute left-0 right-0 top-[3.2%] z-[1]`}
      ref={navRef}
    >
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
              toggleMenu
                ? '/assets/icons/logo-active.svg'
                : '/assets/icons/logo.svg'
            }`}
            alt='logo'
            className='object-contain'
            fill
          />
        </a>
        <div className='relative flex items-center'>
          {pathname === '/funding-options' && (
            <div className='hide-on-menu absolute right-[calc(100%+44px)] z-[-1] hidden w-[409px] translate-y-[-5px] gap-[14px] font-darker text-[34.093px] font-semibold leading-normal'>
              <p className='text-primary'>Choose Grants</p>
              <span
                onClick={handleScrollToGrants}
                className='cursor-pointer text-light-blue'
              >
                Click to select
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='16.7'
                  viewBox='0 0 79 80'
                  fill='none'
                  className='arrow-jump ml-[4px] inline-block rotate-90'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M64.6629 43.4332L0 43.4332L0 36.4332L64.6803 36.4332L33.5102 5.26284L38.46 0.31311L75.5962 37.4496L78.0711 39.9245L75.5962 42.3994L38.46 79.5356L33.5102 74.5859L64.6629 43.4332Z'
                    fill='#4E4EFF'
                  />
                </svg>
              </span>
            </div>
          )}
          <button
            className='flex-center gap-2'
            onClick={toggleMenu ? handleCloseMenu : handleOpenMenu}
          >
            <p
              className={`translate-y-[-5px] font-darker text-[32px] font-semibold leading-[43.39px] ${
                toggleMenu ? 'text-white' : 'text-primary'
              }`}
            >
              {toggleMenu ? 'Close' : 'Menu'}
            </p>
            <div id='hamburger' className={toggleMenu ? 'active' : ''}>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
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
  ) : (
    <></>
  );
};

export default Navbar;
