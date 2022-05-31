export const getUnion = <T>(a: Set<T>, b: Set<T>): Set<T> => {
  return new Set([ ...a, ...b ])
}
