import logoImg from "@/assets/logo.png";
import styled from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styled.header}>
        <Link className={styled.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={styled.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
