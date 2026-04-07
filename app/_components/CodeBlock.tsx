type CodeBlockProps = {
  children: React.ReactNode;
  language?: string;
  className?: string;
};

export function CodeBlock({
  children,
  language = "typescript",
  className,
}: CodeBlockProps) {
  const preClassName = className
    ? `rounded-lg overflow-x-auto ${className}`
    : "rounded-lg overflow-x-auto";

  return (
    <pre className={preClassName}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
