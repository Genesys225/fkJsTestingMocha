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
    this.a = `(${this.falseStr})[${this.one}]`;
    this.e = `(${this.trueStr})[${this.getNumber(3)}]`;
    this.f = `(${this.falseStr})[${this.zero}]`;
    this.i = `(${this.undefined})[${this.getNumber(5)}]`;
    this.l = `(${this.falseStr})[${this.getNumber(2)}]`;
    this.n = `(${this.undefined})[${this.one}]`;
    this.r = `(${this.trueStr})[${this.one}]`;
    this.s = `(${this.falseStr})[${this.getNumber(3)}]`;
    this.u = `(${this.trueStr})[${this.getNumber(2)}]`;
    this.t = `(${this.trueStr})[${this.zero}]`;
    this['0'] = `(${this.zero})+[]`;
    this['1'] = `(${this.one})+[]`;
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
    this.filterStr = this.getString('filter')
    this.c = `([][${this.filterStr}]+[])[${this.getNumber(3)}]`;
    this.o = `([][${this.filterStr}]+[])[${this.getNumber(6)}]`;

    this.constructorStr = this.getString('constructor')
    this[' '] = `([][${this.filterStr}]+[])[${this.getNumber(8)}]`;
    this['('] = `([][${this.filterStr}]+[])[${this['1']}+[${this.getNumber(5)}]]`;
    this[')'] = `([][${this.filterStr}]+[])[${this['1']}+[${this.getNumber(6)}]]`;
    this['{'] = `([][${this.filterStr}]+[])[${this['1']}+[${this.getNumber(8)}]]`;
    this['['] = `([][${this.filterStr}]+[])[${this['2']}+[${this.zero}]]`;
    this[']'] = `([][${this.filterStr}]+[])[${this['3']}+[${this.getNumber(2)}]]`;
    this['}'] = `([][${this.filterStr}]+[])[${this['3']}+[${this.getNumber(4)}]]`;

    /** 
     *  9 = S, 14 = g
     *  'a'['constructor']+[] => 'function String() { [native code] }' */
    this.S = `(${this.a}[${this.constructorStr}]+[])[${this.getNumber(9)}]`;
    this.g = `(${this.a}[${this.constructorStr}]+[])[${this['1']}+[${this.getNumber(4)}]]`;
    this.toStringStr = this.getString('toString')
    this.b = this.getMissingLowerCaseLetter('b')
    this.h = this.getMissingLowerCaseLetter('h')
    this.j = this.getMissingLowerCaseLetter('j')
    this.k = this.getMissingLowerCaseLetter('k')
    this.m = this.getMissingLowerCaseLetter('m')
    this.p = this.getMissingLowerCaseLetter('p')
    this.q = this.getMissingLowerCaseLetter('q')
    this.v = this.getMissingLowerCaseLetter('v')
    this.w = this.getMissingLowerCaseLetter('w')
    this.x = this.getMissingLowerCaseLetter('x')
    this.y = this.getMissingLowerCaseLetter('y')
  }

  getMissingLowerCaseLetter(c) {
    if (c.charCodeAt(0) < 98 || c.charCodeAt(0) > 122) {
      return false;
    }
    return `(${c.charCodeAt(0) - 87})[${this.toStringStr}](${c.charCodeAt(0) - 86})`
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
