import React from "react";
import classNames from "classnames"; // no alias, installed via `npm i classnames`

/**
 * Re‑usable Button component
 * Usage:
 *   <Button>Primary</Button>
 *   <Button variant="outline">Outline</Button>
 *   <Button variant="ghost" className="px-8">Ghost</Button>
 */
export const Button = React.forwardRef(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-6 py-3";

    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-500",
      outline: "border border-gray-600 text-gray-300 hover:border-white hover:text-white",
      ghost: "text-gray-400 hover:text-white",
    };

    return (
      <button
        ref={ref}
        className={classNames(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
