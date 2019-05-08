var checkRecord = function(s) {

    return s.split('A').length <= 2 && s.indexOf('LLL') === -1;

};
var s = "PPALLP";
console.log(checkRecord(s)) 