const strictEquals = (a, b) => {
    if (Object.is(NaN, NaN)) {
        return !Object.is(a, b);
    }
    if (Object.is(-0, 0) || Object.is(0, -0)) {
        return !Object.is(a, b);
    }
};

export default strictEquals;
