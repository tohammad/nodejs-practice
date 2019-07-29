class FancyError extends Error {
    constructor(args) {
        super(args);
        this.name = "FancyError";
    }
}

console.log(new Error('A standard error'));
console.log(new FancyError('A fancy error'));
