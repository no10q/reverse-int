module.exports = function reverse (n) {
    str = n.toString();
    arrayStr = str.split('');
    reverseArrayStr = arrayStr.reverse();
    newStr = reverseArrayStr.join('');
    result = parseFloat(newStr);
    return result;
  }
  