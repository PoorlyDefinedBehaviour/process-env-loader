import { readFileSync } from "fs";
import { join } from "path";

export type Maybe<T> = T | null | undefined;

function* tokenize(
  content: string,
  separator: string
): Maybe<IterableIterator<Array<string>>> {
  if (!content) return;

  const tokens: Maybe<Array<string>> = content
    .split(/\n| /)
    .filter((toke: string) => !!toke);

  console.log(tokens);
  if (!tokens) return;

  for (const token of tokens) {
    const [property, value] = token.split(separator);
    yield [property, value];
  }
}

export default (path?: string, separator: string = "="): void => {
  const file: Maybe<string> = readFileSync(
    join(path || process.cwd(), ".env"),
    { encoding: "utf8" }
  );

  const file_tokens: Maybe<IterableIterator<Array<string>>> = tokenize(
    file,
    separator
  );

  if (file_tokens) {
    for (const [property, value] of file_tokens) {
      process.env[property] = value;
    }
  }
};
