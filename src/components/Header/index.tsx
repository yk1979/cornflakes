import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="p-4 bg-primary">
    <Link href="/">
      <a className="text-xl font-semibold text-white">cornflakes</a>
    </Link>
  </header>
);

export default Header;
