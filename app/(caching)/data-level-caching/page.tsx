async function getRandomNumber() {
  "use cache";
  return Math.random();
}

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Data Level Caching</h1>
      <p className="mt-4 text-gray-700">
        The number below does not change on reload. This is because{" "}
        <code>getRandomNumber()</code> is cached.
      </p>
      <p className="mt-4 text-xl font-semibold">{getRandomNumber()}</p>
      <a
        href="https://github.com/jobyjoseph/learn-nextjs-by-examples/blob/main/app/(caching)/data-level-caching/page.tsx"
        className="mt-4 text-blue-500 hover:underline block"
        target="_blank"
      >
        View source in Github
      </a>
    </>
  );
}
