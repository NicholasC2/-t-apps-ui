"use client";

import { useRef, useState } from "react";
import { Clipboard, Check } from "lucide-react";

type Props = React.HTMLAttributes<HTMLElement>;

export default function TCode({ children, className, ...props }: Props) {
    const codeRef = useRef<HTMLElement>(null);
    const [copied, setCopied] = useState(false);

    async function copy() {
        const text = codeRef.current?.textContent;

        if (!text) return;

        await navigator.clipboard.writeText(text);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    return (
        <code
            ref={codeRef}
            {...props}
            className={`t-component t-code ${className ?? ""}`}
        >
            {children}

            {copied ? (
                <Check className="t-copy" />
            ) : (
                <Clipboard className="t-copy" onClick={copy} />
            )}
        </code>
    );
}