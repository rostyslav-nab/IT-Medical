import * as faker from 'faker'

export function createBooksMock() {
  let books = [];

  for (let i = 0; i < 1000; i++) {
    books.push({
      title: faker.lorem.sentence(),
      author: faker.name.findName(),
      price: faker.finance.amount()
    });
  }

  return books;
}

export function createBook(number: number) {
  let books = [];

  for (let i = 0; i < number; i++) {
    books.push({
      title: faker.lorem.sentence(),
      author: faker.name.findName(),
      price: faker.finance.amount()
    });
  }

  return books;
}