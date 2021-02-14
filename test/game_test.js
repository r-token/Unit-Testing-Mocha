var expect = require('chai').expect

describe('GAME INSTANCE FUNCTIONS', function() {
    describe('checkGameStatus', function() {
        //set a spec to pending by not implementiong the , function() after the it('description')
        //xit and xdescribe also = pending
        it ('should tell me when the game is over')
    })

    function saveGameAsynchronousTest (callback) {
        setTimeout(function() {
            callback()
        }, 1000)
    }

    describe('saveGame', function() {
        it('should update save status', function(done) {
            let status = 'game not saved...'

            saveGameAsynchronousTest(function() {
                status = 'game saved!'
                expect(status).to.equal('game saved!')
                done()
            })
        })
    })
})