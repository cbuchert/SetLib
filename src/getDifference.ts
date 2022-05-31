export const getDifference = <T>(a: Set<T>, b: Set<T>): Set<T> => {
  return new Set<T>([...a].filter((element) => !b.has(element)))
}
