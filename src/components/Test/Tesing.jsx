'use client';

import React, {
  Children,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';

export function lerp(start, stop, amt) {
  return (1 - amt) * start + amt * stop;
}

const ARC_SIZE = 150;

function CircularCarouselComp(
  { onSelect, onSwapRight, onPointerDown, children },
  ref
) {
  const indexRef = useRef(0);
  const prevRef = useRef(0);
  const nextRef = useRef(0);
  const rendering = useRef(false);
  const wheelLockedRef = useRef(false);
  const [deg, setDeg] = useState(0);
  const [wrapper, setWrapper] = useState(null);

  const handleSetWrapper = (ref) => {
    setWrapper(ref);
  };

  prevRef.current = deg;

  function move() {
    const next = nextRef.current;
    const prev = prevRef.current;
    const deg = lerp(prev, next, 0.2);
    if (deg !== prev) {
      setDeg(deg);
      requestAnimationFrame(move);
    } else {
      rendering.current = false;
    }
    const index = Math.round(Math.abs(((deg / ARC_SIZE) * len) % len));
    if (index != indexRef.current) {
      indexRef.current = index;
      onSelect && onSelect(index);
    }
  }

  const len = Children.count(children);

  const onMouseDown = (e) => {
    const isTouch = e.type === 'touchstart';
    let _deg = deg;

    onPointerDown && onPointerDown();

    const tryMove = (next) => {
      _deg = nextRef.current += next;
      _deg = nextRef.current = Math.min(_deg, 3);
      _deg = nextRef.current = Math.max(_deg, -ARC_SIZE + 3);
      if (!rendering.current) {
        rendering.current = true;
        requestAnimationFrame(move);
      }
    };

    const onMouseMove = ({ movementX }) => {
      tryMove(movementX / 30);
    };

    let prevTouchPageX;
    const onTouchMove = ({ touches }) => {
      const pageX = touches[0].pageX;
      if (prevTouchPageX) {
        const movementX = pageX - prevTouchPageX;
        tryMove(movementX / 10);
      }
      prevTouchPageX = pageX;
    };

    const onMouseUp = () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchend', onMouseUp);

      const angle = ARC_SIZE / len;
      const mod = _deg % angle;
      const diff = angle - Math.abs(mod);
      const sign = Math.sign(_deg);
      const max = angle * (len - 1);

      if (_deg > 0) {
        if (onSwapRight && indexRef.current === 0 && _deg > 2) {
          onSwapRight();
        }
        tryMove(-_deg);
      } else if (-_deg > max) {
        tryMove(-_deg - max);
      } else {
        const move = (diff <= angle / 2 ? diff : mod) * sign;
        tryMove(move);
      }
    };
    if (isTouch) {
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onMouseUp);
    } else {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  };

  useEffect(() => {
    if (!wrapper) return;

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (wheelLockedRef.current) {
        return;
      }
      wheelLockedRef.current = true;

      setTimeout(() => {
        wheelLockedRef.current = false;
      }, 100);

      let _deg = ARC_SIZE / len;

      if (e.deltaY > 0 || e.deltaX > 0) {
        _deg *= -1;
      }

      const next = Math.max(nextRef.current + _deg, -ARC_SIZE - _deg);
      const index = Math.round(((next / ARC_SIZE) * len) % len);

      if ((e.deltaY < 0 || e.deltaX < 0) && index === 1) {
        onSwapRight && onSwapRight();
        return;
      }

      nextRef.current = next;

      if (!rendering.current) {
        rendering.current = true;
        requestAnimationFrame(move);
      }
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      wrapper.removeEventListener('wheel', onWheel);
    };
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [wrapper, len]);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo(i) {
        const _deg = (-ARC_SIZE / len) * i;
        nextRef.current = _deg;
        if (!rendering.current) {
          rendering.current = true;
          requestAnimationFrame(move);
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [len]
  );

  return (
    <div className='root' ref={handleSetWrapper}>
      {/* TODO: find proper role */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className='handle'
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
      >
        <div className='center'>
          <div className='items' style={{ transform: `rotate(${deg}deg)` }}>
            {Children.map(children, (child, i) => (
              <div
                key={i}
                className='item'
                style={{
                  transform: `translateX(-50%) rotate(${
                    i * (ARC_SIZE / len)
                  }deg)`,
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CircularCarousel = forwardRef(CircularCarouselComp);

const colors = [
  'bg-red-400',
  'bg-orange-400',
  'bg-yellow-400',
  'bg-lime-400',
  'bg-green-400',
  'bg-cyan-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-pink-400',
];

function Application() {
  return (
    <div class='h-screen w-full overflow-hidden'>
      <div class='relative flex h-full flex-col items-center justify-center'>
        <CircularCarousel>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i.toString()}
              className={`flex h-80 w-56 select-none items-center justify-center rounded text-sm font-bold text-white ${
                colors[i % colors.length]
              }`}
            >
              I'm Number {i + 1}
            </div>
          ))}
        </CircularCarousel>
      </div>
    </div>
  );
}

export default Application;
