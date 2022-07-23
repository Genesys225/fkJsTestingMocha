import string, { map, number } from '../jsf.js'
import {expect, should, assert} from 'chai'
import { describe } from 'mocha';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('acquire all number 0-9', () => {
    describe('output "0" and "1"', () => {
        it('(+![]) should output 0 (number)', () => {
            expect(eval('+![]')).equals(0);
        });
    
        it('(+!+[]) should output 1 (number)', () => {
            expect(eval('+!+[]')).equals(1);
        });
    });
    it('one + one should equal two', () => {
        expect(eval('+!+[]+!+[]')).equals(2);
    });
    describe('the number function should return all the numbers 0-9', () => {
        numbers.forEach((n) => {
            it(`number(${n}) should return ${n} (number)`, () => {
                expect(eval(number(n))).equals(n)
            })
        })
    })
    describe('all numbers should be converted to strings buy chaining +[]', () => {
        numbers.forEach((n) => {
            it(`number(${n})+[] should return "${n}" (string)`, () => {
                expect(eval(`${number(n)}+[]`)).equals(n.toString())
            })
        })
    })    
})

describe('acquire the "constructor" letters ("c", "o", "n", "s", "t", "r", "u")', () => {
 it('(![]+[]) should output false (string)', () => {
    expect(eval('![]+[]')).equals('false');
 });
 it('(!![]+[]) should output true (string)', () => {
    expect(eval('!![]+[]')).equals('true');
 });
 it('([][+![]]) should output undefined (string) - now, we only need "c"', () => {
    expect(eval('[][+![]]+[]')).equals('undefined')
 });
 it('string("filter") should output "filter" (string)', () => {
    expect(eval(string('filter'))).equals('filter')
 });

 it('string("c") should output "c" (string) ("([][${string(\'filter\')}]+[])[${number(3)}]" == "c")', () => {
    expect(eval(string('c')), 'output' + string('c')).equals('c')
 })
 it('string("o") should output "o" (string) ("([][${string(\'filter\')}]+[])[${number(6)}]" == "o")', () => {
    expect(eval(string('o')), 'output' + string('o')).equals('o')
 })
 it('string("constructor") should output "constructor" (string)', () => {
    expect(eval(string('constructor'))).equals('constructor')
 });
});

describe('acquire the toString ability ie. the "S" and the "g" ', () => {
    it(`"a"[\'constructor\']+[] should output a string that starts with "${String.toString()}"...`, () => {
        expect(eval(`${map.a}[${string('constructor')}]+[]`)).equals(String.toString())
    })
    it('string("S") should output "S" (string) ("(${map.a}[${string(\'constructor\')}]+[])[${number(6)}]" == "S")', () => {
        expect(eval(string('S'))).equals('S')
    })
    it('string("g") should output "g" (string) ("(${map.a}[${string(\'constructor\')}]+[])[${map[\'1\']}+[number(4)]]" == "g")', () => {
        expect(eval(string('g'))).equals('g')
    })
    it('string("toString") should output "toString" (string)', () => {
        expect(eval(string('toString'))).equals('toString')
     });
});

