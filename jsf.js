export default class Jsf {
  constructor() {
    this.logger = false;
    this.zero = '+[]';
    this.one = '+!+[]';
    this.two = '+!+[]+!+[]';
    this.three = '+!+[]+!+[]+!+[]';
    this.four = '+!+[]+!+[]+!+[]+!+[]';
    this.five = '+!+[]+!+[]+!+[]+!+[]+!+[]';
    this.six = '+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]';
    this.seven = '+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]';
    this.eight = '+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]';
    this.nine = '+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]';
    this.false = '![]';
    this.true = '!![]';
    this.falseStr = '![]+[]';
    this.trueStr = '!![]+[]';
    this.undefined = `[][${this.zero}]+[]`;
    this.a = `(${this.falseStr})[${this.one}]`;
    this.d = `(${this.undefined})[${this.two}]`;
    this.e = `(${this.trueStr})[${this.three}]`;
    this.f = `(${this.falseStr})[${this.zero}]`;
    this.i = `(${this.undefined})[${this.five}]`;
    this.l = `(${this.falseStr})[${this.two}]`;
    this.n = `(${this.undefined})[${this.one}]`;
    this.r = `(${this.trueStr})[${this.one}]`;
    this.s = `(${this.falseStr})[${this.three}]`;
    this.t = `(${this.trueStr})[${this.zero}]`;
    this.u = `(${this.trueStr})[${this.two}]`;
    this['0'] = `(${this.zero})+[]`;
    this['1'] = `(${this.one})+[]`;
    this['2'] = `(${this.two})+[]`;
    this['3'] = `(${this.three})+[]`;
    this['4'] = `(${this.four})+[]`;
    this['5'] = `(${this.five})+[]`;
    this['6'] = `(${this.six})+[]`;
    this['7'] = `(${this.seven})+[]`;
    this['8'] = `(${this.eight})+[]`;
    this['9'] = `(${this.nine})+[]`;
    this.init();
  }

  init() {
    this.ArrayEntriesStr = `[][${this.getString('entries')}]()+[]`
    this['.'] = `(+(${this.getString('11e100')})+[])[${this.one}]`;
    this['+'] = `(+(${this.getString('11e100')})+[])[${this.four}]`;
    this['-'] = `(+(${this.getString('.0000001')})+[])[${this.two}]`;
    this.A = `([][${this.getString('entries')}]()+[])[${this.eight}]`
    this.I = `(+(${this.getString('1e1000')})+[])[${this.zero}]`;
    this['['] = `(${this.ArrayEntriesStr})[${this.zero}]`;
    this[']'] = `(${this.ArrayEntriesStr})[${this.convertTwoDigitsToString(22)}]`;
    
    /**  
     *   3 = c, 6 = o, 8 = ' ', 15 = (, 16 = ), 18 = {,  20 = [
     *  []['constructor']+[] => 'function filter() { [native code] }' */
    this.filterStr = this.getString('filter');
    this.filter = `[][${this.filterStr}]`
    this.filterMtdStr = `${this.filter}+[]`
    this.c = `(${this.filterMtdStr})[${this.three}]`;
    this.o = `(${this.filterMtdStr})[${this.six}]`;
    this[' '] = `(${this.filterMtdStr})[${this.eight}]`;
    this['('] = `(${this.filterMtdStr})[${this.one}+[${this.five}]]`;
    this[')'] = `(${this.filterMtdStr})[${this.one}+[${this.six}]]`;
    this['{'] = `(${this.filterMtdStr})[${this.one}+[${this.eight}]]`;
    this['}'] = `(${this.filterMtdStr})[${this.getString('slice')}](${this.getString('-1')})`;

    this.constructor = this.getString('constructor');
    /**  
     *   11 = m, 12 = b
     *  (0)['constructor']+[] => 'function Number() { [native code] }' */
    this.b = `((${this.zero})[${this.constructor}]+[])[${this.convertTwoDigitsToString(12)}]`;
    this.m = `((${this.zero})[${this.constructor}]+[])[${this.convertTwoDigitsToString(11)}]`;
    this.Function = `(${this.filter})[${this.constructor}]`;
    this.FunctionStr = `(${this.filter})[${this.constructor}]+[]`;
    this.F = `(${this.FunctionStr})[${this.nine}]`;
   
    /** 
     *  9 = S, 14 = g
     *  'a'['constructor']+[] => 'function String() { [native code] }' */
    this.S = `(${this.a}[${this.constructor}]+[])[${this.nine}]`;
    this.g = `(${this.a}[${this.constructor}]+[])[${this.convertTwoDigitsToString(14)}]`;
    this.toStringStr = this.getString('toString');
    this.h = this.getMissingLowerCaseLetter('h');
    this.j = this.getMissingLowerCaseLetter('j');
    this.k = this.getMissingLowerCaseLetter('k');
    this.p = this.getMissingLowerCaseLetter('p');
    this.q = this.getMissingLowerCaseLetter('q');
    this.v = this.getMissingLowerCaseLetter('v');
    this.w = this.getMissingLowerCaseLetter('w');
    this.x = this.getMissingLowerCaseLetter('x');
    this.y = this.getMissingLowerCaseLetter('y');
    this.z = this.getMissingLowerCaseLetter('z');
    this.normalizeErr = this.getString('String().normalize(false)');
    this.E = this.outputCatchRangeErrProp(5);
    this.R = this.outputCatchRangeErrProp(0);
    this['/'] = this.outputRegExInvoke(0);
    this['?'] = this.outputRegExInvoke(2);
    this[':'] = this.outputRegExInvoke(3);
    this[","] = `${this.execute(`return []+[[]].concat([[]])`)}`;
    this["'"] = `${this.execute(`try{Function([]+[[]].concat([[]]))()}catch(a){return (a+[])[30]}`)}`;
    this['\\'] = `${this.execute(`return (RegExp('/')+[])[1]`)}`;
    this.C = this.execute(`return \'\\u0043\'`);
  }

  getNumber(n) {
    if (n === 0) return this.zero;
    if (n === 1) return this.one;
    return Array.from({ length: n - 1 }).reduce((res) => res + this.one, this.one);
  }
  
  getString(s = '') {
    const encoded = s.split('').map((c) => {
      if (!this[c]) {
        return this.execute(`return String.fromCharCode(${c.charCodeAt(0)})`)
      }
      return this[c];
    }).join('+');
    if (this.logger) {
      console.log(encoded.length, 'string', `\x1b[31m'${s}'\x1b[0m`);
    }
    return encoded;
  }

  convertTwoDigitsToString(number) {
    const charNumParts = number.toString().split('')
    return `${charNumParts[0]}+[${this.getNumber(charNumParts[1])}]`;
  }

  getMissingLowerCaseLetter(c) {
    if (c.charCodeAt(0) < 98 || c.charCodeAt(0) > 122) {
      return false;
    }
    const charNumEncoded = this.convertTwoDigitsToString(c.charCodeAt(0) - 87);
    const radixEncoded = this.convertTwoDigitsToString(c.charCodeAt(0) - 86);
    return `(+(${charNumEncoded}))[${this.toStringStr}](${radixEncoded})`
  }
  
  execute(s) {
    const res = `${this.Function}(${this.getString(s)})()`;
    if (this.logger) {
      console.log(`Function(\x1b[31m'${s}'\x1b[0m)()`, res.length, 'exec', `\x1b[36m${eval(res)}\x1b[0m`)
    }
    return res;
  }

  decode(_) {
    return Function(`return eval(${_})`)();
  }

  outputCatchRangeErrProp(n) {
    return this.execute('try{String().normalize(false)}catch(a){return (a+[])[' + n + ']}');
  }

  outputRegExInvoke(n) {
    return this.execute('return (RegExp()+[])[' + n + ']');
  }
}


const jsf = new Jsf();
// console.log(jsf.execute('console.log(\'yo\')'));
// console.log(jsf.decode(jsf.execute('console.log(\'yo\')')))
// console.log(eval(`((${zero})[${string('constructor')}]+[])[${number(11)}]`));

// console.log(eval(`(${map.a})[${string('constructor')}][${string('fromCharCode')}](${number(189)})`));
