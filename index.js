// function(){}
// () =>{}
var add = function (a, b) {
    console.log(a + b);
};
add(12, 34);
var NumberFunc = function (_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b;
};
//$ tsc index.ts && node  index.js
var result = NumberFunc({ c: 23, b: 32, a: 0 });
console.log(result);
var Func = function (param1, param2) {
    for (var index = 0; index < param2.length; index++) {
        var element = param2[index];
    }
    console.log("Param 1", param1);
};
Func(null, [{ a: 12, b: 23, c: 43 }, { a: 0.2, b: 2 }]);
