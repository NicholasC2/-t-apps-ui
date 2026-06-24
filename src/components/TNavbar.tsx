"use client";

import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>

export default function TNavbar({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={`t-navbar ${className ?? ""}`}
    >
      {children}
    </div>
  );
}