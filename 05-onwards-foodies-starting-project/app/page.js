import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <ul>
        <li>
          <Link href={"/community"}>go to community</Link>
        </li>
        <li>
          <Link href={"/meals"}>go to meals</Link>
        </li>
        <li>
          <Link href={"/meals/share"}>go to meals/share</Link>
        </li>
        <li>
          <Link href={"/meals/chocopie"}>go to meals/chocopie</Link>
        </li>
        <li>
          <Link href={"/meals/udong"}>go to meals/udong</Link>
        </li>
      </ul>
    </main>
  );
}
