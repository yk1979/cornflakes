import React from "react";

type Props = {
  // TODO sub でいいのかな
  theme: "primary" | "sub";
} & JSX.IntrinsicElements["button"];

const Button: React.FC<Props> = ({
  theme,
  type = "button",
  onClick,
  children,
}) => {
  const customs =
    theme === "primary" ? ["bg-yellow-400"] : ["bg-gray-600", "text-white"];

  const classNames = [
    "block",
    "w-64",
    "px-8",
    "py-4",
    "mt-6",
    "mx-auto",
    "rounded",
    "text-lg",
    "font-bold",
    ...customs,
  ];

  return (
    <button type={type} className={classNames.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
