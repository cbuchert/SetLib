export const getIntersection = <T>(a: Set<T>, b: Set<T>): Set<T> => {
  return new Set<T>([...a].filter((value) => b.has(value)))
}
