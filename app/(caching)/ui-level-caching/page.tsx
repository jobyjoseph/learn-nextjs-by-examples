async function getRandomNumber() {
  return Math.random();
}

export default async function Page() {
  "use cache";
  return (
    <>
      <h1 className="text-3xl font-bold">UI Level Caching</h1>
      <p className="mt-4 text-gray-700">
        The number below does not change on reload. This is because page
        component is cached. Note that <code>getRandomNumber()</code> is not
        cached.
      </p>
      <p className="mt-4 text-xl font-semibold">{getRandomNumber()}</p>
      <a
        href="https://github.com/jobyjoseph/learn-nextjs-by-examples/blob/main/app/(caching)/ui-level-caching/page.tsx"
        className="mt-4 text-blue-500 hover:underline block"
        target="_blank"
      >
        View source in Github
      </a>
    </>
  );
}
