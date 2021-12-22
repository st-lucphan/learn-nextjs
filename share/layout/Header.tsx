import type { NextPage } from 'next'
import React, { Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1 className="logo">
              <Link href="/">
                <a className="logo-link"><Image src="/vercel.svg" alt="ST BLOG" width={46} height={46}/></a>
              </Link>
            </h1>
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link href={"/"}> 
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/about"}> 
                    <a className="nav-link">About</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/"}> 
                    <a className="nav-link">Log in</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href={"/"}> 
                    <a className="nav-link">Sign up</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
