"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function TInput({ className, ...props}: Props) {
  return (
    <input
      {...props}
      className={`t-component t-input ${className ?? ""}`}
    />
  );
}