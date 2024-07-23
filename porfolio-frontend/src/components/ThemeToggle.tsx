import { useEffect, useRef, useState } from "react";
import { FaRegHandPaper } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { tv, VariantProps } from "tailwind-variants";
import { toggleTheme } from "../state/theme/themeSlice";

const themeToggle = tv({
  slots: {
    base: "w-3/5 lg:w-2/6 relative h-screen p-7 rounded-2xl bg-gradient-to-b from-gray-950 to-blue-custom dark:from-gray-300 dark:to-gray-100",
    text: "text-4xl font-bold selection-transparent text-slate-50 dark:text-zinc-950"
  },
  variants: {
    theme: {}
  },
  defaultVariants: {}
})


const { base, text } = themeToggle();

export type ThemeToggleProps = VariantProps<typeof themeToggle>;

const ThemeToggle = ( {}: ThemeToggleProps ) => {

  const location = useLocation();

  const [isHolding, setHolding] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const objRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      if(isHolding) {
        const [cX, cY] = [e.clientX, e.clientY];
        animate(cX, cY);
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if(isHolding) {
        const [cX, cY] = [e.touches[0].clientX, e.touches[0].clientY];
        animate(cX, cY);
      }
    }

    const animate = (cx: number, cy: number) => {
      if(mainRef.current && objRef.current) {
        const windowOffSet = window.innerWidth / 2;

        mainRef.current.animate({
          top : `${ cy - (mainRef.current.offsetHeight / 2) }px`,
        }, {duration: 50, fill: "forwards"});

        objRef.current.animate({
          top: `${ ((window.innerHeight - cy) / window.innerHeight) * mainRef.current.offsetHeight * 2 }px`,
          left : `${ (cx - windowOffSet) * 0.4 }px`,
          rotate: `${-5 + (5 * cx / windowOffSet)}deg`
        }, { duration: 500, fill: "forwards" });
      }
    }

    const reset = () => {
      if(mainRef.current && objRef.current) {
        mainRef.current.animate({
          top: `${window.innerHeight - mainRef.current.offsetHeight}px`,
        }, { duration: 150, fill: "forwards" })
        objRef.current.animate({
          top: "0px",
          left: "0px",
          rotate: "0deg"
        }, { duration: 500, fill: "forwards" })
      }
    }

    const handleMouseUp = (e: MouseEvent) => {
      if(e.clientY < window.innerHeight  / 2) {
        dispatch(toggleTheme());
      }
      setHolding(false);
      reset();
      clearListners();
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if(e.touches[0].clientY > window.innerHeight / 2) {
        dispatch(toggleTheme());
      }
      setHolding(false);
      reset();
      clearListners();
    }

    const clearListners = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }

    if(isHolding) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }
  }, [isHolding])

  return (
    <div
      onMouseDown={() => setHolding(true)}
      onTouchStartCapture={() => setHolding(true)}
      className={`
        bottom-0 left-0 w-full fixed ${location.pathname === "/" ? "h-24" : "h-8"}
        flex justify-center ${isHolding ? "cursor-grabbing" : "cursor-grab"}
      `}
      ref={mainRef}
    >
      <div className={ base() } ref={objRef} >
        <div className="flex items-center gap-5">
          <FaRegHandPaper className={ text() } />
          <span className={ text() }>
            pull me
          </span>
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle;
