async function parentFunction(arg: string) {
  return async function childCachedFunction() {
    "use cache";
    console.log("Argument from parent function:", arg);
    const randomValue = Math.random();
    return randomValue;
  };
}

export default async function Page() {
  const randomValue1 = (await parentFunction("test1"))();
  const randomValue2 = (await parentFunction("test2"))();
  return (
    <>
      <h1>Cached Functions with Different Lexical Scope</h1>
      <p>
        Here is a function that returns another cached function. The child
        function behavior is dependent on the argument passed to the parent
        function. Therefore for each argument, a different cache key is used.
      </p>
      <p>
        The random values are generated independently for each cached function.
        But, once generated they are cached and will return the same value for
        subsequent calls with the same argument.
      </p>
      <p>Random Value 1: {randomValue1}</p>
      <p>Random Value 2: {randomValue2}</p>
      <a
        href="https://github.com/jobyjoseph/learn-nextjs-by-examples/blob/main/app/(caching)/cached-functions-with-different-lexical-scope/page.tsx"
        className="mt-4 text-blue-500 hover:underline block"
        target="_blank"
      >
        View source in Github
      </a>
    </>
  );
}
