const zero = '+[]';
const one = '+!+[]';

export function number(n) {
    if (n === 0) return zero;
    if (n === 1) return one;
    return Array.from({ length: n - 1 }).reduce((res) => res + one, one);
}

//

export const map = {
    a: `(![]+[]+[])[${number(1)}]`,
    e: `(!+[]+[])[${number(3)}]`,
    f: `(!!+[]+[])[${number(0)}]`,
    i: `([][+![]]+[])[${number(5)}]`,
    l: `(!!+[]+[])[${number(2)}]`,
    n: `([][+![]]+[])[${number(1)}]`,
    r: `(!+[]+[])[${number(1)}]`,
    s: `(!!+[]+[])[${number(3)}]`,
    u: `(!+[]+[])[${number(2)}]`,
    t: `(!+[]+[])[${number(0)}]`,
};

map['0'] = `(${number(0)})+[]`;
map['1'] = `(${number(1)})+[]`;
map['2'] = `(${number(2)})+[]`;
map['3'] = `(${number(3)})+[]`;
map['4'] = `(${number(4)})+[]`;
map['5'] = `(${number(5)})+[]`;
map['6'] = `(${number(6)})+[]`;
map['7'] = `(${number(7)})+[]`;
map['8'] = `(${number(8)})+[]`;
map['9'] = `(${number(9)})+[]`;

map.c = `([][${string('filter')}]+[])[${number(3)}]`;
map.d = `([][+![]]+[])[${number(2)}]`;
map.o = `([][${string('filter')}]+[])[${number(6)}]`;
map.S = `(${map.a}[${string('constructor')}]+[])[${number(9)}]`;
map.g = `(${map.a}[${string('constructor')}]+[])[${map['1']}+[${number(4)}]]`;


function string(s) {
    return s.split('').map((c) => {
        return map[c];
    }).join('+');
}


// map['.'] = `(+(${string('11e100')})+[])[${number(1)}]`;
// map['-'] = `(+(${string('.0000001')})+[])[${number(2)}]`;
// map.g = `(((/${map['-']}/)[${string('constructor')}])+[])[${number(11)}]`;

function funcer(s, p) {
    return `(()=>{})[${string('constructor')}](${string(s)})()`; // (${string(s)})('\\')
}

// console.log(number(0), '\n', eval(number(0)));
// console.log(map['-'], '\n', eval(map['-']));
// console.log(string('return escape'), '\n', eval(string('return escape')));
// console.log(eval(`(${map.a}[${one}]+[])[${number(2)}]`));
// console.log(eval(`((${zero})[${string('constructor')}]+[])[${number(11)}]`));

// console.log(eval(`(${map.a})[${string('constructor')}][${string('fromCharCode')}](${number(189)})`));

// console.log(number(2));



export default string
