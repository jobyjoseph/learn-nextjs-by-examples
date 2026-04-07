import { CodeBlock } from "@/app/_components/CodeBlock";

async function getRandomNumber(fruit: string) {
  "use cache";
  return Math.random();
}

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">Cached function With Arguments</h1>
      <p className="mt-4 text-gray-700">
        A cached function creates unique cache entries for each unique set of
        arguments.
      </p>
      <CodeBlock className="mt-4" language="typescript">
        {`async function getRandomNumber(fruit: string) {
  "use cache";
  return Math.random();
}`}
      </CodeBlock>
      <p className="mt-4 text-gray-700">
        {" "}
        2 random numbers are generated below for 2 different arguments. These
        numbers do not change on reload because the function is cached.
      </p>
      <p className="mt-4 text-xl font-semibold">{getRandomNumber("apple")}</p>
      <p className="mt-4 text-xl font-semibold">{getRandomNumber("banana")}</p>
      <a
        href="https://github.com/jobyjoseph/learn-nextjs-by-examples/blob/main/app/(caching)/cached-function-with-arguments/page.tsx"
        className="mt-4 text-blue-500 hover:underline block"
        target="_blank"
      >
        View source in Github
      </a>
    </>
  );
}
