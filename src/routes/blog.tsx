import { A } from "@solidjs/router";

export default function Blog() {
  return (
    <main>
      <h1>Blog (Static)</h1>
      <p>Static blog page generated at build time.</p>
      <A href="/">Home</A>
    </main>
  );
}
