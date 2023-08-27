'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';
import Slider from 'react-slick';

import { replaceWithBr } from '@utils/function';

import { cards, carousels, accordionHome, circulars } from '@configs/datas';
import HoverButton from '@components/HoverButton';
import SectionCards from '@components/SectionCards';
// import CircularCard from '@components/CircularCard';
import CarouselCard from '@components/CarouselCard';
import AccordItem from '@components/AccordItem';

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='absolute bottom-[2em] z-[1] xl:left-[7em] 5xl:left-[16em]'
    >
      <Image
        src='/assets/icons/circular-btn.svg'
        width={118}
        height={118}
        alt='circular-next'
        className='rotate-[180deg] xl:h-[80px] xl:w-[80px] 5xl:h-[118px] 5xl:w-[118px]'
      />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='absolute bottom-[2em] z-[1] xl:left-[1.5em] 5xl:left-[7em]'
    >
      <Image
        src='/assets/icons/circular-btn.svg'
        alt='circular-prev'
        width={118}
        height={118}
        className='xl:h-[80px] xl:w-[80px] 5xl:h-[118px] 5xl:w-[118px]'
      />
    </button>
  );
}

const Home = () => {
  const [spacing, setSpacing] = useState(0);
  console.log(spacing);

  useLayoutEffect(() => {
    const value = window.screen.width;
    function handleCalculateSpacing() {
      switch (true) {
        case value >= 1281 && value <= 1535:
          setSpacing(100);
          break;
        case value >= 1536 && value <= 1919:
          setSpacing(120);
          break;
        case value >= 1920 && value <= 2559:
          setSpacing(200);
          break;
        case value >= 2560:
          setSpacing(300);
          break;
        default:
          break;
      }
    }
    handleCalculateSpacing();

    window.addEventListener('resize', handleCalculateSpacing);

    return () => {
      window.removeEventListener('resize', handleCalculateSpacing);
    };
  }, []);

  const cardsRef = useRef();
  const circularRef = useRef();
  const circularEl = gsap.utils.selector(circularRef);

  const [expanded, setExpanded] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardss = gsap.utils.toArray('.card-item');

      cardss.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacing} top+=0px`,
          endTrigger: cardsRef.current,
          end: `bottom top+=${250 + cards.length * spacing}`,
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: 'card-pin',
          invalidateOnRefresh: true,
        });
      });
    }, cardsRef);
    return () => ctx.revert();
  }, [spacing]);

  // let animation = gsap.timeline({
  //     paused: true,
  //     defaults: { duration: 1, ease: 'none' },
  //   }),
  //   proxy;
  // const numBoxes = circulars.length;
  // const boxStep = 1 / (numBoxes + 1);
  // const numPositions = numBoxes * 2;
  // const positionStep = 1 / numPositions;

  // let snapValues = [];
  // const hoverTweens = [];
  // const clickTweens = [];
  // for (let i = 1; i <= numBoxes; i++) {
  //   snapValues.push(i * boxStep);
  // }
  // const snapProgress = gsap.utils.snap(snapValues);
  // const normalizeProgress = gsap.utils.normalize(1, 0);

  // function moveToProgress(progress) {
  //   gsap.killTweensOf(proxy); // Kill draggable tweens.
  //   collapse(); // Collapse all items.

  //   gsap.to(animation, {
  //     ease: 'back.out(1.7)',
  //     progress: snapProgress(progress),
  //   });
  // }

  // Animations.
  // function collapse(except = null) {
  //   clickTweens.forEach((tween, i) => {
  //     if (i !== except && !tween.reversed()) tween.reverse();
  //   });

  //   hoverTweens.forEach((tween, i) => {
  //     if (i !== except && !tween.reversed()) tween.reverse();
  //   });
  // }

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     //GSAP variables
  //     proxy = document.createElement('div');
  //     const wrapper = circularRef.current;
  //     const boxes = gsap.utils.toArray(
  //       circularEl('.circular-wrapper'),
  //       wrapper
  //     );
  //     gsap.set(boxes, {
  //       xPercent: -50,
  //       yPercent: 10,
  //       transformOrigin: 'center center',
  //       x: wrapper.offsetWidth / 2.5,
  //       y: 0,
  //     });

  //     // Build carousel.
  //     if (numBoxes > 1) {
  //       createSVGPath(numPositions);
  //       createAnimation();
  //       createDraggable();
  //     }

  //     // Create animation.
  //     function createAnimation() {
  //       const minEnd = 0.5 + positionStep;
  //       animation.to(
  //         boxes,
  //         {
  //           motionPath: {
  //             path: '#path',
  //             align: '#path',
  //             autoRotate: true,
  //             start: (i) => i * positionStep,
  //             end: (i) => minEnd + i * positionStep,
  //           },
  //         },
  //         0
  //       );

  //       // TODO: Calculate initial position based on window width.
  //       let initialProgress = normalizeProgress(positionStep * 4);
  //       if (numBoxes < 5) initialProgress = normalizeProgress(0.5);

  //       animation.progress(1).progress(initialProgress);
  //     }

  //     // Create draggable.
  //     function createDraggable() {
  //       const c = MotionPathPlugin.getLength(path) / 1.5; // Circumference.
  //       const normalizeX = gsap.utils.normalize(0, c);
  //       const snapValuesX = snapValues.map((val) => val * c);
  //       const snapX = gsap.utils.snap(snapValuesX);

  //       Draggable.create(proxy, {
  //         allowContextMenu: true,
  //         bounds: {
  //           minX: positionStep * c,
  //           maxX: (10 - positionStep) * c,
  //         },
  //         edgeResistance: 0.85,
  //         trigger: wrapper,
  //         type: 'x',
  //         inertia: true,
  //         onPressInit: function () {
  //           gsap.set(this.target, { x: animation.progress() * c });
  //           this.update();
  //         },
  //         onDragStart: collapse,
  //         onDrag: updateProgress,
  //         onThrowUpdate: updateProgress,
  //         snap: snapX,
  //         onDragEnd: function () {
  //           console.log(this.x + ',' + this.y); // get position
  //         },
  //       });

  //       function updateProgress() {
  //         gsap.killTweensOf(animation); // Kill animation tweens.

  //         gsap.to(animation, {
  //           duration: 0,
  //           progress: normalizeX(this.x),
  //         });
  //       }
  //     }

  //     function createSVGPath(numPositions) {
  //       // Settings.
  //       const positionAngleInDegrees = 8;
  //       const radius = 1280;

  //       // Create SVG element.
  //       const svg = document.createElementNS(
  //         'http://www.w3.org/2000/svg',
  //         'svg'
  //       );
  //       svg.setAttribute('width', radius * 2);
  //       svg.setAttribute('height', radius * 2);

  //       // Create path element.
  //       const path = document.createElementNS(
  //         'http://www.w3.org/2000/svg',
  //         'path'
  //       );
  //       path.setAttribute('id', 'path');

  //       const angleInDegrees = numPositions * positionAngleInDegrees;
  //       const offsetAngleInDegrees = -angleInDegrees / 2; // Center path
  //       const startAngleInDegrees = -90 + offsetAngleInDegrees;
  //       const endAngleInDegrees = startAngleInDegrees + angleInDegrees;

  //       const startAngleInRadians = (startAngleInDegrees * Math.PI) / 180;
  //       const endAngleInRadians = (endAngleInDegrees * Math.PI) / 180;

  //       const startX = radius + Math.cos(startAngleInRadians) * radius;
  //       const startY = radius + Math.sin(startAngleInRadians) * radius;

  //       const endX = radius + Math.cos(endAngleInRadians) * radius;
  //       const endY = radius + Math.sin(endAngleInRadians) * radius;

  //       const largeArcFlag = angleInDegrees > 180 ? 1 : 0;
  //       const sweepFlag = angleInDegrees > 0 ? 1 : 0;

  //       const pathString = `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX},${endY}`;
  //       path.setAttribute('d', pathString);

  //       // Append elements.
  //       svg.appendChild(path);
  //       wrapper.insertBefore(svg, wrapper.children[0]);
  //     }

  //     boxes.forEach(function (box, i) {
  //       const hoverTween = gsap.to(box, { scale: 1, reversed: true });
  //       const boxEl = gsap.utils.selector(box);
  //       const clickTween = gsap
  //         .timeline({ paused: true })
  //         // .to('.circular-wrapper.active-card', {
  //         //   background: 'white',
  //         // })
  //         // .to(
  //         //   '.circular-wrapper.active-card > p',
  //         //   {
  //         //     color: '#4E4EFF',
  //         //   },
  //         //   '<'
  //         // )
  //         // .to(
  //         //   '.circular-wrapper.active-card > .circular-arrow',
  //         //   {
  //         //     fill: '#4E4EFF',
  //         //   },
  //         //   '<'
  //         // )
  //         // .to(
  //         //   '.circular-wrapper.active-card > .circular-icon',
  //         //   {
  //         //     fill: '#4E4EFF',
  //         //   },
  //         //   '<'
  //         // )
  //         .to(box, {
  //           backgroundColor: '#4E4EFF',
  //         })
  //         .to(
  //           boxEl('p'),
  //           {
  //             color: '#74FFFE',
  //           },
  //           '<'
  //         )
  //         .to(
  //           boxEl('.circular-arrow path'),
  //           {
  //             fill: '#EDF82D',
  //           },
  //           '<'
  //         )
  //         .to(
  //           boxEl('.circular-icon path'),
  //           {
  //             fill: '#74FFFE',
  //           },
  //           '<'
  //         );

  //       box.addEventListener('click', () => {
  //         // Collapse except clicked.
  //         collapse(i);

  //         // Move to clicked.
  //         const newProgress = normalizeProgress(snapValues[i]);
  //         moveToProgress(newProgress);

  //         // Active css

  //         // Expand clicked.
  //         if (hoverTween.reversed()) hoverTween.play();
  //         if (clickTween.reversed()) clickTween.play();
  //       });

  //       box.addEventListener('mouseenter', () => {
  //         if (hoverTween.reversed()) hoverTween.play();
  //       });

  //       box.addEventListener('mouseleave', () => {
  //         if (clickTween.reversed()) hoverTween.reverse();
  //       });

  //       hoverTweens.push(hoverTween);
  //       clickTweens.push(clickTween);
  //     });
  //   }, circularRef);
  //   return () => ctx.revert();
  // }, []);

  const pickerRef = useRef(null);
  const cellsRef = useRef([]);
  const proxyRef = useRef(null);

  const baseTl = useRef(gsap.timeline({ paused: true }));
  const animation = useRef(
    gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.current.tweenFromTo(1, 1.5))
      .progress(1)
  );

  useEffect(() => {
    gsap.defaults({
      ease: 'none',
    });

    const picker = pickerRef.current;
    const cells = cellsRef.current;
    const proxy = proxyRef.current;

    const cellWidth = 609;
    const rotation = -25;

    const numCells = cells.length;
    const cellStep = 1 / numCells;
    const wrapWidth = cellWidth * numCells;
    const wrapIndex = gsap.utils.wrap(0, cells.length);

    const baseTl = gsap.timeline({ paused: true });

    gsap.set(picker, {
      perspective: 1100,
      width: '100vw',
      // width: wrapWidth - cellWidth,
    });

    for (let i = 0; i < cells.length; i++) {
      initCell(cells[i], i);
    }

    const animation = gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 1.5))
      .progress(1);

    const draggable = new Draggable(proxy, {
      allowContextMenu: true,
      type: 'x',
      inertia: true,
      trigger: picker,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX,
      },
      // snap: function (endValue) {
      //   const step = 10;
      //   return Math.round(endValue / step) * step;
      // },
      onDragEnd() {
        const i = wrapIndex((-this.endX / wrapWidth) * cells.length - 5);
        console.log(i);
        const _slides = circularEl('.circular-wrapper');
        let min = _slides[0].getBoundingClientRect().y;
        for (let i = 1; i < _slides.length; ++i) {
          if (_slides[i].getBoundingClientRect().y < min) {
            min = _slides[i].getBoundingClientRect().y;
          }
        }

        _slides.forEach((slide) => {
          if (slide.getBoundingClientRect().y === min) {
            slide.style.top = '20%';
          }
        });
      },
    });

    function snapX(x) {
      // return Math.round((x / cellWidth) * (-Math.PI / 2)) + 100 * cellWidth;
      return Math.round(x / cellWidth) * cellWidth;
    }

    function updateProgress() {
      let newProg = this.x / wrapWidth;
      newProg = newProg - Math.floor(newProg);
      animation.progress(newProg);
    }

    function initCell(element, index) {
      gsap.set(element, {
        width: cellWidth,
        rotation,
        x: -cellWidth,
        backgroundColor: '#fff',
        top: '8%',
      });
      // .then(
      //   gsap
      //     .timeline()
      //     .to(element.childNodes[1], {
      //       repeat: 1,
      //       color: '#4e4eff',
      //       yoyo: true,
      //     })
      //     .to(element.childNodes[2].firstChild, {
      //       fill: '#4e4eff',
      //       yoyo: true,
      //       repeat: 1,
      //     })
      //     .to(element.childNodes[0].children, {
      //       fill: '#4e4eff',
      //       yoyo: true,
      //       repeat: 1,
      //     })
      // );

      const tl = gsap
        .timeline({ repeat: 1 })
        .to(
          element,
          1,
          {
            x: `+=${wrapWidth + 125}`,
            // x: '+=' + wrapWidth,
            rotation: -rotation,
          },
          0
        )
        .to(
          element,
          cellStep,
          {
            repeat: 1,
            backgroundColor: '#4E4EFF',
            top: '4%',
            yoyo: true,
          },
          0.5 - cellStep
        )
        .to(
          element.childNodes[1],
          cellStep,
          {
            repeat: 1,
            color: '#74FFFE',
            yoyo: true,
          },
          0.5 - cellStep
        )
        .to(
          element.childNodes[2].firstChild,
          cellStep,
          {
            fill: '#EDF82D',
            yoyo: true,
            repeat: 1,
          },
          0.5 - cellStep
        )
        .to(
          element.childNodes[0].children,
          cellStep,
          {
            fill: '#74FFFE',
            yoyo: true,
            repeat: 1,
          },
          0.5 - cellStep
        );
      baseTl.add(tl, index * -cellStep);
    }
  }, []);

  useLayoutEffect(() => {
    const _slides = circularEl('.circular-wrapper');
    let min = _slides[0].getBoundingClientRect().y;
    for (let i = 1; i < _slides.length; ++i) {
      if (_slides[i].getBoundingClientRect().y < min) {
        min = _slides[i].getBoundingClientRect().y;
      }
    }

    _slides.forEach((slide) => {
      if (slide.getBoundingClientRect().y === min) {
        slide.style.top = '22%';
      }
    });
  });

  return (
    <>
      <section className='overflow-hidden'>
        <div
          className='relative w-screen xl:h-[150vh] 5xl:h-[2094.73px]'
          style={{
            backgroundImage: 'url("/assets/images/home-bg.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
          }}
        >
          <div className='max_container absolute bottom-[10%]'>
            <div className='flex flex-col text-primary 5xl:basis-5/6'>
              <h1 className='font-darker font-semibold leading-[73.53%] xl:text-[calc(100vw/20)] 5xl:text-[190px]'>
                Find funding you
                <br className='hidden xl:block' />
                didn’t know existed.
              </h1>
              <div className='mt-[111.82px] flex justify-between xl:w-[90vw] xl:flex-col xl:items-start xl:gap-[20px] 5xl:w-auto 5xl:flex-row 5xl:items-end 5xl:gap-0'>
                <p className='font-dmsans font-bold leading-[98.53%] xl:text-[38px] 5xl:text-[40px]'>
                  How it works?
                </p>
                <div className='flex flex-col font-dmsans font-normal leading-[125.03%] xl:gap-4 xl:text-[40px] 5xl:gap-8 5xl:text-[56px]'>
                  <p>
                    Cash flow is a major issue for companies.
                    <br className='xl:hidden 5xl:block' />
                    However 90%* of businesses are unaware of
                    <br className='xl:hidden 5xl:block' /> the funding or grant
                    options available to them.
                  </p>
                  <p>
                    We have found three major groups of funding
                    <br className='xl:hidden 5xl:block' />
                    and the right specialists to help you apply so
                    <br className='xl:hidden 5xl:block' />
                    you don’t miss out on opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className='self-start xl:translate-x-[-30vw] 5xl:mt-[7%] 5xl:translate-x-0'>
              <HoverButton isDefault textBlue />
            </div>
          </div>
        </div>
        <div className='mb-[-5px] h-fit w-screen'>
          <Slider
            slidesToShow={1}
            slidesToScroll={1}
            speed={1000}
            infinite={true}
            adaptiveHeight
            autoplay={true}
            className='5lx:h-[1440px] h-auto w-screen'
          >
            <div className='relative h-full w-full'>
              <img
                src='/assets/images/home-man.png'
                alt='man'
                className='5lx:h-[1440px] h-auto w-full'
              />
              <img
                src='/assets/images/image-home-wrapper.svg'
                alt='wrapper'
                className='absolute left-0 top-0 opacity-75 xl:w-[calc(100vw/2.1)] 5xl:h-auto 5xl:w-auto'
              />
            </div>
            <div className='relative h-full w-full'>
              <img
                src='/assets/images/home-women-1.png'
                alt='man'
                className='5lx:h-[1440px] h-auto w-full'
              />
              <img
                src='/assets/images/image-home-wrapper.svg'
                alt='wrapper'
                className='absolute left-0 top-0 opacity-75 xl:w-[calc(100vw/2.1)] 5xl:h-auto 5xl:w-auto'
              />
            </div>
            <div className='relative h-full w-full'>
              <img
                src='/assets/images/home-women-2.png'
                alt='man'
                className='5lx:h-[1440px] h-auto w-full'
              />
              <img
                src='/assets/images/image-home-wrapper.svg'
                alt='wrapper'
                className='absolute left-0 top-0 opacity-75 xl:w-[calc(100vw/2.1)] 5xl:h-auto 5xl:w-auto'
              />
            </div>
          </Slider>
        </div>
        {/* Pinning Section */}
        <div className='pined-cards' ref={cardsRef}>
          {cards.map((card, idx) => (
            <SectionCards
              title={card.title}
              desc={card.desc}
              paragraph={card.paragraph}
              index={idx + 1}
              key={idx}
            />
          ))}
        </div>
        {/* Circular Carousel */}
        <div className='relative hidden h-screen w-screen overflow-hidden xl:block 5xl:h-[1796.54px]'>
          <Image
            src='/assets/images/circur-carousel-bg.png'
            alt='circular'
            fill
          />
          <div className='absolute bottom-[15%] left-[50%] z-[1] flex translate-x-[-50%] gap-6'>
            <button
              className='cursor-not-allowed'
              id='prev'
              // onClick={() => {
              //   moveToProgress(
              //     animation.progress() + 1 / cellsRef.current.length
              //   );
              // }}
            >
              <Image
                src='/assets/icons/circular-btn.svg'
                alt='circular-prev'
                width={118}
                height={118}
              />
            </button>
            <button
              className='cursor-not-allowed'
              id='next'
              // onClick={() => {
              //   moveToProgress(
              //     animation.progress() - 1 / cellsRef.current.length
              //   );
              // }}
            >
              <Image
                src='/assets/icons/circular-btn.svg'
                width={118}
                height={118}
                alt='circular-next'
                className='rotate-[180deg]'
              />
            </button>
          </div>
          <div className='relative flex flex-col'>
            <h1 className='max_container mt-[167.97px] self-start font-darker text-[138px] font-semibold leading-[82.53%] text-primary'>
              Choose
              <br />
              Funding Options
            </h1>
            <div className='container' ref={circularRef}>
              <div ref={pickerRef} className='picker'>
                {circulars.map((circ, i) => (
                  <div
                    style={{
                      transformOrigin: 'center bottom',
                    }}
                    key={i}
                    ref={(el) => (cellsRef.current[i] = el)}
                    className={`circular-wrapper absolute left-0 top-0 box-border flex h-[845px] w-[609px] shrink-0 cursor-grabbing flex-col rounded-[48px] bg-white px-[77.4px] py-[10px]`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='125'
                      height='183'
                      viewBox='0 0 125 183'
                      fill='none'
                      className='circular-icon basis-1/4'
                    >
                      <path
                        d='M65.9911 57.1242C69.5653 57.0144 72.4039 54.0529 72.3314 50.5095C72.2589 46.9661 69.3027 44.1827 65.7285 44.2926C62.1543 44.4024 59.3156 47.3639 59.3881 50.9073C59.4606 54.4507 62.4169 57.2341 65.9911 57.1242Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M51.4236 57.4509C53.7466 57.3795 55.5916 55.4547 55.5444 53.1518C55.4973 50.8488 53.576 49.0398 51.253 49.1112C48.93 49.1826 47.0851 51.1074 47.1322 53.4103C47.1793 55.7133 49.1007 57.5223 51.4236 57.4509Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M80.4715 137.423C82.7945 137.351 84.6394 135.427 84.5923 133.124C84.5452 130.821 82.6238 129.012 80.3008 129.083C77.9779 129.155 76.1329 131.079 76.1801 133.382C76.2272 135.685 78.1485 137.494 80.4715 137.423Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M93.2977 132.277C96.8719 132.167 99.7106 129.206 99.6381 125.663C99.5656 122.119 96.6093 119.336 93.0351 119.446C89.4609 119.555 86.6223 122.517 86.6948 126.06C86.7673 129.604 89.7235 132.387 93.2977 132.277Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M102.727 118.714C105.05 118.643 106.895 116.718 106.848 114.415C106.801 112.112 104.88 110.303 102.557 110.374C100.234 110.446 98.3888 112.371 98.4359 114.674C98.483 116.976 100.404 118.785 102.727 118.714Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M24.1082 90.0419C26.4312 89.9706 28.2761 88.0458 28.229 85.7428C28.1819 83.4399 26.2605 81.6309 23.9376 81.7023C21.6146 81.7737 19.7696 83.6984 19.8168 86.0014C19.8639 88.3043 21.7852 90.1133 24.1082 90.0419Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M24.1551 107.072C27.7293 106.962 30.568 104.001 30.4955 100.457C30.423 96.9139 27.4668 94.1305 23.8926 94.2403C20.3184 94.3502 17.4797 97.3117 17.5522 100.855C17.6247 104.398 20.5809 107.182 24.1551 107.072Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M29.159 118.714C31.482 118.643 33.3269 116.718 33.2798 114.415C33.2327 112.112 31.3113 110.303 28.9883 110.375C26.6654 110.446 24.8204 112.371 24.8676 114.674C24.9147 116.977 26.836 118.786 29.159 118.714Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M102.727 76.1594C105.05 76.088 106.895 74.1632 106.848 71.8603C106.801 69.5573 104.88 67.7483 102.557 67.8197C100.234 67.8911 98.3888 69.8159 98.4359 72.1188C98.483 74.4218 100.404 76.2308 102.727 76.1594Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M51.4236 137.423C53.7466 137.351 55.5916 135.427 55.5444 133.124C55.4973 130.821 53.576 129.012 51.253 129.083C48.93 129.155 47.0851 131.079 47.1322 133.382C47.1793 135.685 49.1007 137.494 51.4236 137.423Z'
                        fill='#4E4EFF'
                      />
                      <path
                        d='M80.4715 57.4506C82.7945 57.3792 84.6394 55.4545 84.5923 53.1515C84.5452 50.8486 82.6238 49.0396 80.3008 49.111C77.9779 49.1824 76.1329 51.1071 76.1801 53.4101C76.2272 55.713 78.1485 57.522 80.4715 57.4506Z'
                        fill='#4E4EFF'
                      />
                    </svg>
                    <p
                      className={`mt-[0.6em] basis-2/4 font-darker text-[100px] font-semibold leading-[78.53%] text-light-blue`}
                      dangerouslySetInnerHTML={{
                        __html: replaceWithBr(circ),
                      }}
                    />
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='108'
                      height='111'
                      viewBox='0 0 108 111'
                      fill='none'
                      className='circular-arrow basis-1/4 self-end'
                    >
                      <path
                        className='fill-[#4E4EFF]'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M96.5264 91.7398L0.667749 17.2588L4.31499 12.1753L100.175 86.6574L87.7429 0.885678L93.8154 0.00550961L107.351 93.3915L107.808 96.546L104.772 96.9861L14.8874 110.015L13.9729 103.706L96.5264 91.7398Z'
                      />
                    </svg>
                  </div>
                ))}
                <div ref={proxyRef} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-screen xl:h-auto 5xl:h-[50vh]'>
          <Slider
            slidesToShow={1}
            slidesToScroll={1}
            arrows
            speed={1000}
            infinite={true}
            adaptiveHeight
            autoplay={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            className='relative h-full w-full overflow-hidden'
          >
            {carousels.map((caro, i) => (
              <CarouselCard
                key={caro.name + i}
                title={caro.title}
                extra={caro.extra}
                text={caro.text}
                avatar={caro.avatar}
                name={caro.name}
                job={caro.job}
              />
            ))}
          </Slider>
        </div>
        <div className='w-screen xl:mt-[calc(100vh/10)] 5xl:mt-[170.96px]'>
          <div className='max_container flex-col'>
            <article className='flex w-full items-center self-start border-t-[4.06px] border-solid border-primary xl:gap-10 5xl:gap-[355.65px]'>
              <h6 className='font-darker font-semibold leading-[77.03%] text-primary xl:my-[calc(100vh/15)] xl:text-[calc(100vh/20)] 5xl:my-[71px] 5xl:text-[138px]'>
                Got a question?
              </h6>
              <p className='w-[650px] font-dmsans font-normal leading-[106.5%] text-primary xl:text-[calc(100vh/30)] 5xl:text-[32px]'>
                We are here to answer any burning questions and ensure you are
                taken care of.
              </p>
            </article>
            {accordionHome.map((accor, i) => (
              <AccordItem
                isDefault
                key={'accordion-hone-' + i}
                idx={i}
                text={accor}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
