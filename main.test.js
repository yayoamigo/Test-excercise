const {stringLength, reverseString }  = require('./main');
const Calculator = require('./calculator.js')

// stringLength
test('takes any string and returns its characters count', () => {
 expect(stringLength('hello')).toBe(5);
})

test('Makes sure the string is not empty', () => {
 expect(stringLength('')).toBe('Error');
})

test('Makes sure the string has less than 10 char', () => {
 expect(stringLength('opsljdhfgrtry')).toBe('Error');
})

//reverseString
test('takes any string reverse it', () => {
 expect(reverseString('hello')).toBe('olleh');
})

describe('calculator add method', () =>{
test('takes two numbers and adds them', () => {
 expect(Calculator.add(1,2)).toBe(3);
})
test('takes two numbers and adds them', () => {
 expect(Calculator.add(2,2)).toBe(4);
})
test('takes two numbers and adds them', () => {
 expect(Calculator.add(6,2)).toBe(8);
})

});

describe('calculator substract method', () =>{
 test('takes two numbers and substract them', () => {
  expect(Calculator.substract(1,2)).toBe(-1);
 })
 test('takes two numbers and substract them', () => {
  expect(Calculator.substract(2,2)).toBe(0);
 })
 test('takes two numbers and substract them', () => {
  expect(Calculator.substract(6,2)).toBe(4);
 })
 
 });

 describe('calculator multiply method', () =>{
  test('takes two numbers and multiply them', () => {
   expect(Calculator.multiply(1,2)).toBe(2);
  })
  test('takes two numbers and multiply them', () => {
   expect(Calculator.multiply(2,2)).toBe(4);
  })
  test('takes two numbers and multiply them', () => {
   expect(Calculator.multiply(6,2)).toBe(12);
  })
  
  });
  describe('calculator division method', () =>{
   test('takes two numbers and divides them', () => {
    expect(Calculator.divide(2,2)).toBe(1);
   })
   test('takes two numbers and divides them', () => {
    expect(Calculator.divide(6,2)).toBe(3);
   })
   test('takes two numbers and divides them', () => {
    expect(Calculator.divide(8,2)).toBe(4);
   })
   
   });

