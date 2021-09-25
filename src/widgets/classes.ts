export default function classes(
  ...args: (undefined | string | { [key: string]: boolean })[]
) {
  const classes: string[] = [];
  for (const arg of args) {
    if (arg === undefined) {
      continue;
    } else if (typeof arg === "string") {
      classes.push(arg);
    } else {
      const cls = Object.entries(arg)
        .filter(([_, value]) => value)
        .map(([key, _]) => key);
      classes.push(...cls);
    }
  }
  return classes.join(" ");
}
