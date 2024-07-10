import { FaRegHandPaper } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { tv, VariantProps } from "tailwind-variants";

const themeToggle = tv({
  slots: {
    base: "w-2/6 h-screen p-7 rounded-2xl",
    text: "text-4xl font-bold"
  },
  variants: {
    theme: {
      dark: {
        base: "bg-stone-200",
        text: "text-stone-950"
      }
    }
  },
  defaultVariants: {
    theme: "dark"
  }
})

const { base, text } = themeToggle();

export type ThemeToggleProps = VariantProps<typeof themeToggle>;

const ThemeToggle = ( {}: ThemeToggleProps ) => {

  const location = useLocation();
  const heightSize = location.pathname === "/" ? "h-24" : "h-8";

  return (
    <div className={`fixed bottom-0 left-0 w-full ${heightSize} overflow-hidden flex justify-center`}>
      <div className={ base() }>
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
