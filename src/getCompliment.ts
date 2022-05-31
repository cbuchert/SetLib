import { getDifference } from "./getDifference"

export const getCompliment = <T>(fullSet: Set<T>, subset: Set<T>): Set<T> => {
  return getDifference(fullSet, subset)
}
