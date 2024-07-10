import { ComponentProps, ReactNode } from "react";
import { IconType } from "react-icons";
import { tv, VariantProps } from "tailwind-variants";

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button> & {
  Icon?: IconType,
  children?: ReactNode
}

const button = tv({
  base: "flex items-center justify-around gap-2 py-1 px-2 rounded-3xl text-lg font-medium",
  variants: {
    theme: {
      light: "bg-stone-50 text-zinc-950",
      dark: "bg-stone-950 text-slate-50"
    },
  },
  defaultVariants: {
    theme: "light"
  }
})

const Button = ( { Icon, theme, children, ...props}: ButtonProps ) => {
  return (
    <button className={ button({ theme }) } { ...props }>
      {Icon && <Icon />}
      {children && children}
    </button>
  )
}

export default Button;
