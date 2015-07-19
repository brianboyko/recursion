// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var output = [];
  var test = Object.prototype.toString.call(obj);
  switch (test) {
    case '[object Null]':
      output.push('null');
      break;
    case '[object Number]':
      output.push(obj);
      break;
    case '[object String]':
      output.push('"' + obj + '"');
      break;
    case '[object Boolean]':
      output.push(obj ? 'true' : 'false');
      break;
    case '[object Undefined]':
      output.push('undefined');
      break;
    case '[object Function]':
      output.push('');
      break;
    case '[object Array]':
      var strArray = '[';
      for (var i = 0; i < obj.length; i++) {
        strArray += stringifyJSON(obj[i]);
        if (i != obj.length - 1) {
          strArray += ',';
        } // end if
      } // end for
      strArray += ']';
      output.push(strArray);
      break;
    case '[object Object]':
      var strObject = '{';
      for (var key in obj) {
        if (Object.prototype.toString.call(obj[key]) !== '[object Undefined]' &&
          Object.prototype.toString.call(obj[key]) !== '[object Function]') {
          strObject += (stringifyJSON(key) + ':' + stringifyJSON(obj[key]) +
            ',');
        } // end not function/undefined if
      } // end for
      if (strObject[strObject.length - 1] === ',') {
        strObject = (strObject.substring(0, strObject.length - 1));
      } // end kill-comma if
      strObject += '}';
      output.push(strObject);
      break;
  }
  return output.join(', ');
};