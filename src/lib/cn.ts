// Tiny class-name merge helper.
// Filters out falsy values so vi kan skrive `cn("base", condition && "extra")`
// uden at hive en hel utility-pakke ind.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
