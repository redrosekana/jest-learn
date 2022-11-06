//! Repeating Setup ทำทุกครั้งก่อนและหลังในการเทสแต่ละเทส
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));
// beforeEach(() => console.log('2 - beforeEach'));
// afterEach(() => console.log('2 - afterEach'));
// test('', () => console.log('test order 1'));
// test('', () => console.log('test order 2'));

//! One-Time Setup ทำครั้งเดียวก่อนและหลังในการเทส
// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeAll(() => console.log('2 - beforeAll'));
// afterAll(() => console.log('2 - afterAll'));
// test('', () => console.log('test order 1'));
// test('', () => console.log('test order 2'));

// beforeAll(() => console.log('Outside 1 - beforeAll'));
// afterAll(() => console.log('Outside 1 - afterAll'));
// beforeEach(() => console.log('Outside 1 - beforeEach'));
// afterEach(() => console.log('Outside 1 - afterEach'));

//! beforeAll จะทำก่อน beforeEach และ AfterAll จะทำหลัง afterEach
// describe('Scoped One', () => {
//     beforeAll(() => console.log('ScopeOne - beforeAll'));
//     afterAll(() => console.log('ScopeOne - afterAll'));
//     beforeEach(() => console.log('1 - beforeEach'));
//     afterEach(() => console.log('1 - afterEach'));
//     beforeEach(() => console.log('2 - beforeEach'));
//     afterEach(() => console.log('2 - afterEach'));
//     test('', () => console.log('test order 1'));
//     test('', () => console.log('test order 2'));
// });

// beforeAll(() => console.log('Outside 2 - beforeAll'));
// afterAll(() => console.log('Outside 2 - afterAll'));
// beforeEach(() => console.log('Outside 2 - beforeEach'));
// afterEach(() => console.log('Outside 2 - afterEach'));

//! block scope จะทำงานตามลำดับปกติ ตามลำดับการเขียนโค้ด
// describe('Scoped Two', () => {
//     beforeAll(() => console.log('ScopeTwo - beforeAll'));
//     afterAll(() => console.log('ScopeTwo - afterAll'));
    
//     beforeEach(() => console.log('3 - beforeEach'));
//     afterEach(() => console.log('3 - afterEach'));
//     beforeEach(() => console.log('4 - beforeEach'));
//     afterEach(() => console.log('4 - afterEach'));
//     test('', () => console.log('test order 3'));
//     test('', () => console.log('test order 4'));
// });

test('Visual', () => {
    
})