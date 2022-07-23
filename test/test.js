import Jsf from '../jsf.js';
import { expect, should, assert } from 'chai';
import { describe } from 'mocha';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const jsf = new Jsf();
describe('acquire all number 0-9', () => {
  describe('output "0" and "1"', () => {
    it('(jsf.zero) should output 0 (number)', () => {
      expect(eval(jsf.zero)).equals(0);
    });

    it('(jsf.one) should output 1 (number)', () => {
      expect(eval(jsf.one)).equals(1);
    });
  });
  it('one + one (concatenated) should equal two', () => {
    expect(eval(jsf.one + jsf.one)).equals(2);
  });
  describe('the number function should return all the numbers 0-9', () => {
    numbers.forEach((n) => {
      it(`jsf.getNumber(${n}) should return ${n} (number)`, () => {
        expect(eval(jsf.getNumber(n))).equals(n);
      });
    });
  });
  describe('all numbers should be converted to strings buy chaining +[]', () => {
    numbers.forEach((n) => {
      it(`jsf.getNumber(${n})+[] should return "${n}" (string)`, () => {
        expect(eval(`${jsf.getNumber(n)}+[]`)).equals(n.toString());
      });
    });
  });
});

describe('acquire the "constructor" letters ("c", "o", "n", "s", "t", "r", "u")', () => {
  it('(jsf.falseStr) should output false (string)', () => {
    expect(eval(jsf.falseStr)).equals('false');
  });
  it('jsf.trueStr should output true (string)', () => {
    expect(eval(jsf.trueStr)).equals('true');
  });
  it('jsf.undefined should output undefined (string) - now, we only need "c"', () => {
    expect(eval(jsf.undefined)).equals('undefined');
  });
  it('jsf.getString("filter") should output "filter" (string)', () => {
    expect(eval(jsf.getString('filter'))).equals('filter');
  });

  it('jsf.getString("c") should output "c" (string) ("([][${jsf.getString(\'filter\')}]+[])[${jsf.getNumber(3)}]" == "c")', () => {
    expect(eval(jsf.getString('c')), 'output' + jsf.getString('c')).equals('c');
  });
  it('jsf.getString("o") should output "o" (string) ("([][${jsf.getString(\'filter\')}]+[])[${jsf.getNumber(6)}]" == "o")', () => {
    expect(eval(jsf.getString('o')), 'output' + jsf.getString('o')).equals('o');
  });
  it('jsf.getString("constructor") should output "constructor" (string)', () => {
    expect(eval(jsf.getString('constructor'))).equals('constructor');
  });
  it(`jsf.getString should print the rest of the acquired characters from "${[].filter}"`, () => {
    expect(eval(jsf.getString('('))).equals('(');
    expect(eval(jsf.getString(')'))).equals(')');
    expect(eval(jsf.getString('{'))).equals('{');
    expect(eval(jsf.getString('['))).equals('[');
    expect(eval(jsf.getString(']'))).equals(']');
    expect(eval(jsf.getString('}'))).equals('}');
  });

});

describe('acquire the toString ability ie. the "S" and the "g" ', () => {
  it(`"a"[\'constructor\']+[] should output a string that starts with "${String.toString()}"...`, () => {
    expect(eval(`${jsf.a}[${jsf.getString('constructor')}]+[]`)).equals(
      String.toString()
    );
  });
  it('jsf.getString("S") should output "S" (string) ("(${map.a}[${jsf.getString(\'constructor\')}]+[])[${jsf.getNumber(6)}]" == "S")', () => {
    expect(eval(jsf.getString('S'))).equals('S');
  });
  it('jsf.getString("g") should output "g" (string) ("(${map.a}[${jsf.getString(\'constructor\')}]+[])[${map[\'1\']}+[jsf.getNumber(4)]]" == "g")', () => {
    expect(eval(jsf.getString('g'))).equals('g');
  });
  it('jsf.getString("toString") should output "toString" (string)', () => {
    expect(eval(jsf.getString('toString'))).equals('toString');
  });
});

const additionalLetters = ['b', 'h', 'j', 'm', 'p', 'q', 'v', 'w', 'x', 'y', 'z'];
describe("acquire letters from toString method ('b', 'h', 'j', 'm', 'p', 'q', 'v', 'w', 'x', 'y', 'z')", () => {
  
  additionalLetters.forEach((letter, i) => {
    it(`jsf.getMissingLowerCaseLetter("${letter}") should output "${letter}" (string) ("(${letter.charCodeAt(0) - 87})[jsf.toStringStr](${letter.charCodeAt(0) - 86}})" == "${letter}")`, () => {
      expect(eval(jsf.getMissingLowerCaseLetter(letter))).equals(letter);
    });
  })  
});
