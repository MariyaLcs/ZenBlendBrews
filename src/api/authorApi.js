import { authors } from "../tools/mockData";

export function getAuthors() {
  return Promise.resolve(authors);
}
