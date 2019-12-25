import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
      <nav>
        <div className="container">
            <div className="nav-wrapper">
                <Link href="/">
                    <a className="brand-logo">Dapur Rekom Resep Mamah Dedeh</a>
                </Link>
            </div>
        </div>
      </nav>
  );
}

export default Nav
