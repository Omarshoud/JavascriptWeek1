import strictEquals from './app.js';

console.table([
    { A: 1, B: 1, RESULT: strictEquals(1, 1) },
    { A: NaN, B: NaN, RESULT: strictEquals(NaN, NaN) },
    { A: 0, B: -0, RESULT: strictEquals(0, -0) },
    { A: -0, B: 0, RESULT: strictEquals(-0, 0) },
    { A: 1, B: '1', RESULT: strictEquals(1, '1') },
    { A: true, B: false, RESULT: strictEquals(true, false) },
    { A: false, B: false, RESULT: strictEquals(false, false) },
    { A: 'water', B: 'oil', RESULT: strictEquals('Water', 'oil') },
]);
