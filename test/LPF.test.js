require("should");
var LPF = require('../lib/index.js');

describe('LPF', function() {

    describe('#init()', function() {
        it('should return initiated stream', function() {
            LPF.init([10,8,9,10,12,8,50,10,12,8]);
            LPF.buffer.should.eql([10,8,9,10,12,8,50,10,12,8]);
        });

        it('should return initiated stream - overflow', function() {
            LPF.init([10,8,9,10,12,8,50,10,12,8,15,20,30]);
            LPF.buffer.should.eql([10,12,8,50,10,12,8,15,20,30]);
        });
    });

    describe('#next()', function() {
        it('should return same value', function() {
            LPF.smoothing = 1;
            LPF.init([10,8,9,10,12,8,50,10,12,8]);
            var result = Math.round(LPF.next(50));
            result.should.be.eql(50);
        });

        it('should return smoothed value', function() {
            LPF.smoothing = 0.2;
            LPF.init([10,10,10,10,10,10,10,10,10,10]);
            var result = Math.round(LPF.next(20));
            result.should.be.eql(12);
        });
    });

    describe('#smoothArray()', function() {
        it('should return same array', function() {
            LPF.smoothing = 1;
            var values = [10,8,9,10,12,8,50,10,12,8];
            LPF.smoothArray(values).should.eql(values);
        });

        it('should return smoothed array', function() {
            LPF.smoothing = 0.5;
            var values = [10,8,9,10,12,8,50,10,12,8];
            LPF.smoothArray(values).should.eql([10,9,9,10,11,9,30,20,16,12]);
        });
    });

});