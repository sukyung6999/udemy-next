"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styled.link} ${styled.active}` : styled.link
      }
    >
      {children}
    </Link>
  );
}
