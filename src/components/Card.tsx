
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

export function Card({ as: Component = "div", className, ...props }: CardProps) {
  const classes = ["rounded-[28px] border border-gray-200 bg-white", className]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes} {...props} />;
}
