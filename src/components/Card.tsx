
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

export function Card({ as: Component = "div", className, ...props }: CardProps) {
  const classes = ["rounded-[28px] border border-gray-800 bg-gray-900", className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes} {...props} />;
}
