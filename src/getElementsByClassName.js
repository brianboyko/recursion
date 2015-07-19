// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, test, elements) {
    // your code here
    if (elements === undefined) {
        var elements = [];
    }
    if (test === undefined) {
        var test = document.body;
    }
    if (test.classList.contains(className)) {
        elements.push(test);
    }
    if (test.hasChildNodes()) {
        var children = test.childNodes;
        for (var i = 0; i < children.length; i++) {
            getElementsByClassName(className, children[i], elements);
        }
    }
    return elements;
};