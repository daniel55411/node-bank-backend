class Response {
    constructor(success, message, data) {
        this._success = success;
        this._message = message;
        this._data = data;
    }

    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }

    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }

    get status() {
        return this._success;
    }
    set status(value) {
        this._success = value;
    }

    static ok(message, data) {
        return new Response(true, message, data);
    }

    static data(data) {
        return new Response(true, null, data);
    }

    static message(message) {
        return new Response(true, message, null);
    }

    static fail(message) {
        return new Response(false, message, null);
    }

    toJSON() {
        return {
            status: this._success,
            message: this._message,
            data: this._data
        }
    }
}

module.exports = Response;
