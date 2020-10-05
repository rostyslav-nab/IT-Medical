import { createBooksMock } from './mocks/books'

const books = createBooksMock()

export const resolvers = {
  Query: {
    books: (_: any, args: any) => {
      const offset = args.offset || 0
      return books.slice(offset, offset + 10)
    }
  }
}