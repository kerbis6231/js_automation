//test suite
describe('Account Feature', function() {

    before(function (){
        console.log("BEFORE ALL CASES")

    });
    after(function (){
        console.log("AFTER ALL CASES")

    });

    beforeEach(function () {
        console.log("Before each test case")

    });
    afterEach(function () {
        console.log("After each test case")

    });
    //testcase
    it('should print hello', function() {
        console.log('First test')

    });

    it('should create acount sucsessfully ', function () {
        console.log('Second test')

    });
});