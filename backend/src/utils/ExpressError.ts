class ExpressError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.name = "ExpressError";
        Object.setPrototypeOf(this, ExpressError.prototype);
    }
}

export default ExpressError;