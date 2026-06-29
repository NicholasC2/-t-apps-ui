"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  as?: "button";
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  as: "a";
};

type Props = ButtonProps | LinkProps;

export default function TButton({ children, className, ...props }: Props) {
  if (props.as === "a") {
      return (
          <a {...props} className={`t-component t-button ${className ?? ""}`}>
              {children}
          </a>
      );
  }

  return (
      <button {...props} className={`t-component t-button ${className ?? ""}`}>
          {children}
      </button>
  );
}