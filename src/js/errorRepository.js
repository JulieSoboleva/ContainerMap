export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
        this.errors.set(111, 'Ошибка чтения данных');
        this.errors.set(222, 'Ошибка ввода данных');
        this.errors.set(333, 'Недостаточно привилегий');
    }

    translate(code) {
        if (!this.errors.has(code)) {
            return 'Неизвестная ошибка';
        }
        return this.errors.get(code);
    }
}