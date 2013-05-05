/**
 * Author: Ken
 * Date: 05/05/2013
 * Time: 16:23
 */
var Policy = require('../lib/Policy')
    , assert = require('assert')
    , chai = require('chai')
    , CONSTANT = require('../lib/CONSTANT')
    ;

function ok(expr, msg) {
    if (!expr) throw new Error(msg);
}
// mocha ./test/ -R spec -u qunit -t 6000
suite('Policy Base 64');
test('should return base 64 encoding',function(){
    var aPolicy = new Policy();
    chai.expect(aPolicy.toBase64()).to.match(CONSTANT.BASE64.REG_EXR);
});