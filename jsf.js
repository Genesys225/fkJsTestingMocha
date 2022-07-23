export default class Jsf {
  constructor() {
    this.zero = '+[]';
    this.one = '+!+[]';
    this.false = '![]';
    this.true = '!![]';
    this.falseStr = '![]+[]';
    this.trueStr = '!![]+[]';
    this.undefined = `[][${this.zero}]+[]`;
    this.init();
  }

  init() {
    this.a = `(${this.falseStr})[${this.getNumber(1)}]`;
    this.e = `(${this.trueStr})[${this.getNumber(3)}]`;
    this.f = `(${this.falseStr})[${this.getNumber(0)}]`;
    this.i = `(${this.undefined})[${this.getNumber(5)}]`;
    this.l = `(${this.falseStr})[${this.getNumber(2)}]`;
    this.n = `(${this.undefined})[${this.getNumber(1)}]`;
    this.r = `(${this.trueStr})[${this.getNumber(1)}]`;
    this.s = `(${this.falseStr})[${this.getNumber(3)}]`;
    this.u = `(${this.trueStr})[${this.getNumber(2)}]`;
    this.t = `(${this.trueStr})[${this.getNumber(0)}]`;
    this['0'] = `(${this.getNumber(0)})+[]`;
    this['1'] = `(${this.getNumber(1)})+[]`;
    this['2'] = `(${this.getNumber(2)})+[]`;
    this['3'] = `(${this.getNumber(3)})+[]`;
    this['4'] = `(${this.getNumber(4)})+[]`;
    this['5'] = `(${this.getNumber(5)})+[]`;
    this['6'] = `(${this.getNumber(6)})+[]`;
    this['7'] = `(${this.getNumber(7)})+[]`;
    this['8'] = `(${this.getNumber(8)})+[]`;
    this['9'] = `(${this.getNumber(9)})+[]`;
    this.d = `(${this.undefined})[${this.getNumber(2)}]`;
    /**  
     *   3 = c, 6 = o, 8 = ' ', 15 = (, 16 = ), 18 = {,  20 = [,  32 = ],  34 = },
     *  'a'['constructor']+[] => 'function filter() { [native code] }' */
    this.c = `([][${this.getString('filter')}]+[])[${this.getNumber(3)}]`;
    this.o = `([][${this.getString('filter')}]+[])[${this.getNumber(6)}]`;
    this[' '] = `([][${this.getString('filter')}]+[])[${this.getNumber(8)}]`;
    this['('] = `([][${this.getString('filter')}]+[])[${this['1']}+[${this.getNumber(5)}]]`;
    this[')'] = `([][${this.getString('filter')}]+[])[${this['1']}+[${this.getNumber(6)}]]`;
    this['{'] = `([][${this.getString('filter')}]+[])[${this['1']}+[${this.getNumber(8)}]]`;
    this['['] = `([][${this.getString('filter')}]+[])[${this['2']}+[${this.getNumber(0)}]]`;
    this[']'] = `([][${this.getString('filter')}]+[])[${this['3']}+[${this.getNumber(2)}]]`;
    this['}'] = `([][${this.getString('filter')}]+[])[${this['3']}+[${this.getNumber(4)}]]`;

    /** 
     *  9 = S, 14 = g
     *  'a'['constructor']+[] => 'function String() { [native code] }' */
    this.S = `(${this.a}[${this.getString('constructor')}]+[])[${this.getNumber(9)}]`;
    this.g = `(${this.a}[${this.getString('constructor')}]+[])[${this['1']}+[${this.getNumber(4)}]]`;
    this.filterStr = this.getString('filter')
    this.toStringStr = this.getString('toString')
  }

  getNumber(n) {
    if (n === 0) return this.zero;
    if (n === 1) return this.one;
    return Array.from({ length: n - 1 }).reduce((res) => res + this.one, this.one);
  }
  
  getString(s) {
      return s.split('').map((c) => {
          return this[c];
      }).join('+');
  }

  execute(s) {
    return `(()=>{})[${this.getString('constructor')}](${this.getString(s)})()`;
  }
}


// map['.'] = `(+(${string('11e100')})+[])[${number(1)}]`;
// map['-'] = `(+(${string('.0000001')})+[])[${number(2)}]`;
// map.g = `(((/${map['-']}/)[${string('constructor')}])+[])[${number(11)}]`;

// console.log(number(0), '\n', eval(number(0)));
// console.log(map['-'], '\n', eval(map['-']));
// console.log(string('return escape'), '\n', eval(string('return escape')));
// console.log(eval(`(${map.a}[${one}]+[])[${number(2)}]`));
// console.log(eval(`((${zero})[${string('constructor')}]+[])[${number(11)}]`));

// console.log(eval(`(${map.a})[${string('constructor')}][${string('fromCharCode')}](${number(189)})`));

// console.log(number(2));
