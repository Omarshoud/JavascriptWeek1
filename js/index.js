import strictEquals from './app';

console.table([
    { test: '1 & 1', result: strictEquals(1, 1) },
    { test: 'NaN & NaN', result: strictEquals(NaN, NaN) },
    { test: '0 & -0', result: strictEquals(0, -0) },
    { test: '-0 & 0', result: strictEquals(-0, 0) },
    { test: '1 & "1"', result: strictEquals(1, '1') },
    { test: 'true & false', result: strictEquals(true, false) },
    { test: 'false & false', result: strictEquals(false, false) },
    { test: '"Water" & "oil"', result: strictEquals('Water', 'oil') },
]);
