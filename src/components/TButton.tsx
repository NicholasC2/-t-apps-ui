"use client";

import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function TButton({ children, className, ...props }: Props) {
  return (
    <a
      {...props}
      className={`t-component t-button ${className ?? ""}`}
    >
      {children}
    </a>
  );
}