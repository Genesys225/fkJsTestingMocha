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
    this.ArrayEntriesStr = `[][${this.getString('entries')}]()+[]`
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
    this['.'] = `(+(${this.getString('11e100')})+[])[${this.one}]`;
    this['+'] = `(+(${this.getString('11e100')})+[])[${this.getNumber(4)}]`;
    this['-'] = `(+(${this.getString('.0000001')})+[])[${this.getNumber(2)}]`;
    this.d = `(${this.undefined})[${this.getNumber(2)}]`;
    this.A = `([][${this.getString('entries')}]()+[])[${this.getNumber(8)}]`
    this.I = `(+(${this.getString('1e1000')})+[])[${this.zero}]`
    
    /**  
     *   3 = c, 6 = o, 8 = ' ', 15 = (, 16 = ), 18 = {,  20 = [,  32 = ],  34 = }
     *  []['constructor']+[] => 'function filter() { [native code] }' */
    this.filterStr = this.getString('filter')
    this.filter = `[][${this.filterStr}]`
    this.filterMtdStr = `${this.filter}+[]`
    this.c = `(${this.filterMtdStr})[${this.getNumber(3)}]`;
    this.o = `(${this.filterMtdStr})[${this.getNumber(6)}]`;
    
    this.constructorStr = this.getString('constructor')
    /**  
     *   11 = m, 12 = b
     *  (0)['constructor']+[] => 'function Number() { [native code] }' */
    this.b = `((${this.zero})[${this.getString('constructor')}]+[])[${this.convertTwoDigitsToString(12)}]`;
    this.m = `((${this.zero})[${this.getString('constructor')}]+[])[${this.convertTwoDigitsToString(11)}]`;
    this.Function = `(${this.filter})[${this.constructorStr}]`
    this.FunctionStr = `(${this.filter})[${this.constructorStr}]+[]`
    this.F = `(${this.FunctionStr})[${this.getNumber(9)}]`;
    this[' '] = `(${this.filterMtdStr})[${this.getNumber(8)}]`;
    this['('] = `(${this.filterMtdStr})[${this['1']}+[${this.getNumber(5)}]]`;
    this[')'] = `(${this.filterMtdStr})[${this['1']}+[${this.getNumber(6)}]]`;
    this['{'] = `(${this.filterMtdStr})[${this['1']}+[${this.getNumber(8)}]]`;
    this['['] = `(${this.ArrayEntriesStr})[${this.zero}]`;
    this[']'] = `(${this.ArrayEntriesStr})[${this.convertTwoDigitsToString(22)}]`;
    this['}'] = `(${this.filterMtdStr})[${this.getString('slice')}](${this.getString('-1')})`;

    /** 
     *  9 = S, 14 = g
     *  'a'['constructor']+[] => 'function String() { [native code] }' */
    this.S = `(${this.a}[${this.constructorStr}]+[])[${this.getNumber(9)}]`;
    this.g = `(${this.a}[${this.constructorStr}]+[])[${this['1']}+[${this.getNumber(4)}]]`;
    this.toStringStr = this.getString('toString')
    this.h = this.getMissingLowerCaseLetter('h')
    this.j = this.getMissingLowerCaseLetter('j')
    this.k = this.getMissingLowerCaseLetter('k')
    this.p = this.getMissingLowerCaseLetter('p')
    this.q = this.getMissingLowerCaseLetter('q')
    this.v = this.getMissingLowerCaseLetter('v')
    this.w = this.getMissingLowerCaseLetter('w')
    this.x = this.getMissingLowerCaseLetter('x')
    this.y = this.getMissingLowerCaseLetter('y')
    this.z = this.getMissingLowerCaseLetter('z')
    this.normalizeErr = this.getString('String().normalize(false)');
    
    
    // this["'"] = this.outputCatchErrPropOfUndefAt(56)
    this.E = this.outputCatchRangeErrProp(5)
    this.R = this.outputCatchRangeErrProp(0)
    this['/'] = this.outputRegExEvoke(0)
    this['?'] = this.outputRegExEvoke(2)
    this[':'] = this.outputRegExEvoke(3)
    this["'"] = `${this.execute(`try{Function([]+[[]].concat([[]]))()}catch(a){return (a+[])[30]}`)}`
    this['\\'] = `${this.execute(`return (RegExp('/')+[])[1]`)}`
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

  convertTwoDigitsToString(number) {
    const charNumParts = number.toString().split('')
    return `${this.getNumber(charNumParts[0])}+[${this.getNumber(charNumParts[1])}]`
  }

  getMissingLowerCaseLetter(c) {
    if (c.charCodeAt(0) < 98 || c.charCodeAt(0) > 122) {
      return false;
    }
    const charNumEncoded = this.convertTwoDigitsToString(c.charCodeAt(0) - 87)
    const radixEncoded = this.convertTwoDigitsToString(c.charCodeAt(0) - 86)
    return `(+(${charNumEncoded}))[${this.toStringStr}](${radixEncoded})`
  }
  
  execute(s) {
    return `${this.Function}(${this.getString(s)})()`;
  }

  outputCatchRangeErrProp(n) {
    return this.execute('try{String().normalize(false)}catch(a){return (a+[])[' + n + ']}')
  }

  outputRegExEvoke(n) {
    return this.execute('return (RegExp()+[])[' + n + ']')
  }
}



// console.log(string('return escape'), '\n', eval(string('return escape')));
// console.log(eval(`((${zero})[${string('constructor')}]+[])[${number(11)}]`));

// console.log(eval(`(${map.a})[${string('constructor')}][${string('fromCharCode')}](${number(189)})`));
