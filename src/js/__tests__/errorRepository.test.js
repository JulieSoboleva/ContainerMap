import ErrorRepository from "../errorRepository";

test('return known error', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(111)).toBe('Ошибка чтения данных');
  expect(repository.translate(222)).toBe('Ошибка ввода данных');
  expect(repository.translate(333)).toBe('Недостаточно привилегий');
});

test('return unknown error', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(444)).toBe('Неизвестная ошибка');
});