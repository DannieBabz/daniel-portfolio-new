"use client"
import {useState, useRef, useEffect} from 'react';


function FlareCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const ringRef = useRef<HTMLDivElement | null>(null);
    const cursor = useRef({x: 0, y: 0});
    const ring = useRef({x: 0, y: 0});
    const isVisibleRef = useRef(false);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;

        if(cursorRef.current) {
            cursorRef.current.style.transform = `translate(${cursor.current.x}px, ${cursor.current.y}px) translate(-50%, -50%)`;
        }
        const target = e.target as HTMLElement;
        const visible = getComputedStyle(target).cursor === 'pointer';
        setIsVisible(visible);
        isVisibleRef.current = visible;
    }


        window.addEventListener('mousemove', handleMouseMove);

 let animationFrame: number;

    const animate = () => {
      // The smaller this number, the more lag.
      const speed = 0.15;
      const scale = isVisibleRef ? 10 : 1;

      ring.current.x += (cursor.current.x - ring.current.x) * speed;
      ring.current.y += (cursor.current.y - ring.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%) scale(${scale})`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        }
    }, []);

    const flareSize = isVisible ? 5 : 10;

    return (
 <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 rounded-full bg-accent mix-blend-screen pointer-events-none z-50 transition-[width,height] duration-300 ease-out"
        style={{ width: `${flareSize}px`, height: `${flareSize}px` }}
      />
 

      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-accent mix-blend-screen pointer-events-none z-50 transition-[width,height] duration-300 ease-out`}
        style={{ width: `${flareSize * 3}px`, height: `${flareSize * 3}px` }}
      />
    </>    
    )
}

export default FlareCursor;