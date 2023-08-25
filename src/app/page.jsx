'use client';

import Image from 'next/image';
import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';
import Slider from 'react-slick';

import { cards, carousels, accordionHome, circulars } from '@configs/datas';
import HoverButton from '@components/HoverButton';
import SectionCards from '@components/SectionCards';
import CircularCard from '@components/CircularCard';
import CarouselCard from '@components/CarouselCard';
import AccordItem from '@components/AccordItem';

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='absolute bottom-[2em] left-[16em] z-[1]'
    >
      <Image
        src='/assets/icons/circular-btn.svg'
        width={118}
        height={118}
        alt='circular-next'
        className='rotate-[180deg]'
      />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='absolute bottom-[2em] left-[7em] z-[1]'
    >
      <Image
        src='/assets/icons/circular-btn.svg'
        alt='circular-prev'
        width={118}
        height={118}
      />
    </button>
  );
}

const Home = () => {
  const cardsRef = useRef();
  const circularRef = useRef();
  const circularEl = gsap.utils.selector(circularRef);

  const [expanded, setExpanded] = useState(0);

  let animation, proxy;
  const numBoxes = circulars.length;
  const boxStep = 1 / (numBoxes + 1);
  const numPositions = numBoxes * 2;
  const positionStep = 1 / numPositions;

  let snapValues = [];
  const hoverTweens = [];
  const clickTweens = [];
  for (let i = 1; i <= numBoxes; i++) {
    snapValues.push(i * boxStep);
  }
  const snapProgress = gsap.utils.snap(snapValues);
  const normalizeProgress = gsap.utils.normalize(1, 0);

  function moveToProgress(progress) {
    gsap.killTweensOf(proxy); // Kill draggable tweens.
    collapse(); // Collapse all items.

    gsap.to(animation, {
      ease: 'back.out(1.7)',
      progress: snapProgress(progress),
    });
  }

  // Animations.
  function collapse(except = null) {
    clickTweens.forEach((tween, i) => {
      if (i !== except && !tween.reversed()) tween.reverse();
    });

    hoverTweens.forEach((tween, i) => {
      if (i !== except && !tween.reversed()) tween.reverse();
    });
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let cardss = gsap.utils.toArray('.card-item');
      const spacer = 300;

      cardss.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} top+=0px`,
          endTrigger: cardsRef.current,
          end: `bottom top+=${250 + cards.length * spacer}`,
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: 'card-pin',
          invalidateOnRefresh: true,
        });
      });
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //GSAP variables
      proxy = document.createElement('div');
      const wrapper = circularRef.current;
      const boxes = gsap.utils.toArray(
        circularEl('.circular-wrapper'),
        wrapper
      );
      gsap.set(boxes, {
        xPercent: -50,
        yPercent: 10,
        transformOrigin: 'center center',
        x: wrapper.offsetWidth / 2,
        y: 0,
      });

      // Build carousel.
      if (numBoxes > 1) {
        createSVGPath(numPositions);
        createAnimation();
        createDraggable();
      }

      // Create animation.
      function createAnimation() {
        animation = gsap.timeline({
          paused: true,
          defaults: { duration: 1, ease: 'none' },
        });

        const minEnd = 0.5 + positionStep;
        animation.to(
          boxes,
          {
            motionPath: {
              path: '#path',
              align: '#path',
              autoRotate: true,
              start: (i) => i * positionStep,
              end: (i) => minEnd + i * positionStep,
            },
          },
          0
        );

        // TODO: Calculate initial position based on window width.
        let initialProgress = normalizeProgress(positionStep * 3);
        if (numBoxes < 5) initialProgress = normalizeProgress(0.5);

        animation.progress(1).progress(initialProgress);
      }

      // Create draggable.
      function createDraggable() {
        const c = MotionPathPlugin.getLength(path) / 1.5; // Circumference.
        const normalizeX = gsap.utils.normalize(0, c);
        const snapValuesX = snapValues.map((val) => val * c);
        const snapX = gsap.utils.snap(snapValuesX);

        Draggable.create(proxy, {
          allowContextMenu: true,
          bounds: {
            minX: positionStep * c,
            maxX: (1 - positionStep) * c,
          },
          edgeResistance: 0.85,
          trigger: wrapper,
          type: 'x',
          inertia: true,
          onPressInit: function () {
            gsap.set(this.target, { x: animation.progress() * c });
            this.update();
          },
          onDragStart: collapse,
          onDrag: updateProgress,
          onThrowUpdate: updateProgress,
          snap: snapX,
          onDragEnd: function () {
            console.log(this.x + ',' + this.y); // get position
          },
        });

        function updateProgress() {
          gsap.killTweensOf(animation); // Kill animation tweens.

          gsap.to(animation, {
            duration: 0,
            progress: normalizeX(this.x),
          });
        }
      }

      function createSVGPath(numPositions) {
        // Settings.
        const positionAngleInDegrees = 8;
        const radius = 1280;

        // Create SVG element.
        const svg = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'svg'
        );
        svg.setAttribute('width', radius * 2);
        svg.setAttribute('height', radius * 2);

        // Create path element.
        const path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        path.setAttribute('id', 'path');

        const angleInDegrees = numPositions * positionAngleInDegrees;
        const offsetAngleInDegrees = -angleInDegrees / 2; // Center path
        const startAngleInDegrees = -90 + offsetAngleInDegrees;
        const endAngleInDegrees = startAngleInDegrees + angleInDegrees;

        const startAngleInRadians = (startAngleInDegrees * Math.PI) / 180;
        const endAngleInRadians = (endAngleInDegrees * Math.PI) / 180;

        const startX = radius + Math.cos(startAngleInRadians) * radius;
        const startY = radius + Math.sin(startAngleInRadians) * radius;

        const endX = radius + Math.cos(endAngleInRadians) * radius;
        const endY = radius + Math.sin(endAngleInRadians) * radius;

        const largeArcFlag = angleInDegrees > 180 ? 1 : 0;
        const sweepFlag = angleInDegrees > 0 ? 1 : 0;

        const pathString = `M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX},${endY}`;
        path.setAttribute('d', pathString);

        // Append elements.
        svg.appendChild(path);
        wrapper.insertBefore(svg, wrapper.children[0]);
      }

      boxes.forEach(function (box, i) {
        const hoverTween = gsap.to(box, { scale: 1, reversed: true });
        const boxEl = gsap.utils.selector(box);
        const clickTween = gsap
          .timeline({ paused: true })
          // .to('.circular-wrapper.active-card', {
          //   background: 'white',
          // })
          // .to(
          //   '.circular-wrapper.active-card > p',
          //   {
          //     color: '#4E4EFF',
          //   },
          //   '<'
          // )
          // .to(
          //   '.circular-wrapper.active-card > .circular-arrow',
          //   {
          //     fill: '#4E4EFF',
          //   },
          //   '<'
          // )
          // .to(
          //   '.circular-wrapper.active-card > .circular-icon',
          //   {
          //     fill: '#4E4EFF',
          //   },
          //   '<'
          // )
          .to(box, {
            backgroundColor: '#4E4EFF',
          })
          .to(
            boxEl('p'),
            {
              color: '#74FFFE',
            },
            '<'
          )
          .to(
            boxEl('.circular-arrow path'),
            {
              fill: '#EDF82D',
            },
            '<'
          )
          .to(
            boxEl('.circular-icon path'),
            {
              fill: '#74FFFE',
            },
            '<'
          );

        box.addEventListener('click', () => {
          // Collapse except clicked.
          collapse(i);

          // Move to clicked.
          const newProgress = normalizeProgress(snapValues[i]);
          moveToProgress(newProgress);

          // Active css

          // Expand clicked.
          if (hoverTween.reversed()) hoverTween.play();
          if (clickTween.reversed()) clickTween.play();
        });

        box.addEventListener('mouseenter', () => {
          if (hoverTween.reversed()) hoverTween.play();
        });

        box.addEventListener('mouseleave', () => {
          if (clickTween.reversed()) hoverTween.reverse();
        });

        hoverTweens.push(hoverTween);
        clickTweens.push(clickTween);
      });
    }, circularRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section>
        <div
          className='relative h-[2094.73px] w-screen'
          style={{
            backgroundImage: 'url("/assets/images/home-bg.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
          }}
        >
          <div className='max_container absolute bottom-[10%]'>
            <div className='flex basis-5/6 flex-col text-primary'>
              <h1 className='font-darker text-[190px] font-semibold leading-[73.53%]'>
                Find funding you
                <br className='hidden xl:block' />
                didn’t know existed.
              </h1>
              <div className='mt-[111.82px] flex items-end justify-between'>
                <p className='font-dmsans text-[40px] font-bold leading-[98.53%]'>
                  How it works?
                </p>
                <div className='flex flex-col gap-8 font-dmsans text-[56px] font-normal leading-[125.03%]'>
                  <p>
                    Cash flow is a major issue for companies.
                    <br className='hidden xl:block' />
                    However 90%* of businesses are unaware
                    <br className='hidden xl:block' />
                    of the funding or grant options available to them.
                  </p>
                  <p>
                    We have found three major groups of funding
                    <br className='hidden xl:block' />
                    and the right specialists to help you apply so
                    <br className='hidden xl:block' />
                    you don’t miss out on opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-[7%] self-start'>
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
                className='absolute left-0 top-0 opacity-75'
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
                className='absolute left-0 top-0 opacity-75'
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
                className='absolute left-0 top-0 opacity-75'
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
        <div className='relative h-screen w-screen overflow-hidden 5xl:h-[1796.54px]'>
          <Image
            src='/assets/images/circur-carousel-bg.png'
            alt='circular'
            fill
          />
          <div className='absolute bottom-[15%] left-[50%] z-[1] flex translate-x-[-50%] gap-6'>
            <button
              id='prev'
              onClick={() => {
                moveToProgress(animation.progress() + boxStep);
              }}
            >
              <Image
                src='/assets/icons/circular-btn.svg'
                alt='circular-prev'
                width={118}
                height={118}
              />
            </button>
            <button
              id='next'
              onClick={() => {
                moveToProgress(animation.progress() - boxStep);
              }}
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
            <div
              className='circular-carousel relative m-auto flex h-[1868.13px] w-screen justify-center overflow-hidden'
              ref={circularRef}
            >
              <div className='circular-draggable static h-full w-full'>
                {circulars.map((circ, i) => (
                  <CircularCard isActive={i === 2} text={circ} key={circ + i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='h-[80vh] w-screen'>
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
        <div className='mt-[170.96px] w-screen'>
          <div className='max_container flex-col'>
            <article className='flex w-full items-center self-start border-t-[4.06px] border-solid border-primary 4xl:gap-[355.65px]'>
              <h6 className='my-[71px] font-darker text-[138px] font-semibold leading-[77.03%] text-primary'>
                Got a question?
              </h6>
              <p className='w-[650px] font-dmsans text-[32px] font-normal leading-[106.5%] text-primary'>
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
