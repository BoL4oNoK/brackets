module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    
    let pair = [];
    bracketsConfig.forEach(elem => {
        elem = elem[0] + "" + elem[1];
        pair.push(elem.replace(/\(|\)|\[|\]|\||\{|\}/g, "\\$&"));
    });

    pair = pair.join('|');
    let reg = new RegExp(pair, 'g');
    let subStr;
    while (subStr != str) {
        subStr = str;
        str = str.replace(reg, '');
    }

    return !str;
}
