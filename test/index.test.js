const expect = require('chai').expect
const addition = require('../index.js')

// 使用這個東西要用 npm install mocha 進行測試
// 則這裡的 js 有一些特殊的東西可以使用。
// describe 為敘述句，解釋測試的功能使用。
// it 為撰寫的測試案例。

// 但測試有可能太繁瑣，所以有一個東西出現了
// 斷言庫!
// 甚麼是斷言庫
// assertion library
// npm install chai --save

// 這時候就可以用 斷言式 了
// expect 
// 用斷言式可以得知測出的結果，和預期的結果。

describe('測試addition', () => {
    it('測試兩數相加', () => {
        // if (addition(12, 13) !== 25) {
        //     throw new Error('兩數相加出問題，都數有問題')
        // }
        // if (addition(12, '13') !== 25) {
        //     throw new Error('兩數相加出問題，左數自有問題')
        // }
        // if (addition('12', 13) !== 25) {
        //     throw new Error('兩數相加出問題，右數字有問題')
        // }
        // if (addition('12', '13') !== 25) {
        //     throw new Error('兩數相加出問題，皆數字有問題')
        // }
        // if (addition('12', '13') !== 25) {
        //     throw new Error('兩數相加出問題，皆數字有問題')
        // }

        // assertion 斷言式。
        expect(addition(12, 13)).to.be.equal(25)
        expect(addition(12, '13')).to.be.equal(25)
        expect(addition('12', 13)).to.be.equal(25)
        expect(addition('12', '13')).to.be.equal(25)
    })
})