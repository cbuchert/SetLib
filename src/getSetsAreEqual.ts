export const getSetsAreEqual = <T>(a: Set<T>, b: Set<T>): boolean => {
  if (a.size !== b.size) {
    return false
  }

  for (const element of a) {
    if (!b.has(element)) {
      return false
    }
  }

  return true
}
