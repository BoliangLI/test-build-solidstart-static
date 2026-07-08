import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <h1>Home (Static)</h1>
      <ul>
        <li><A href="/about">About</A></li>
        <li><A href="/blog">Blog</A></li>
      </ul>
    </main>
  );
}
