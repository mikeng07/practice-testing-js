var assert = chai.assert;
//test to show player point
describe("test of showing player points ", function(){
    it ('should return correct point ', function(){

        let player = new Player ("Tung", 10);
        assert.strictEqual(player.showPoint(),10,'not correct')
    })
})
//test to see if point is added 
describe ("test of adding player points", function(){
    it('should return point after adding', function(){
        let player = new Player ("Tung", 10);
        assert.strictEqual(player.addPoint().showPoint(),11,'not correct');
    })
    
})