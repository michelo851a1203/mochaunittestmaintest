const addition = (...data) => {
    return data.reduce((prev,curr) => {
        const num1 = isNaN(prev) ? 0 : Number(prev)
        const num2 = isNaN(curr) ? 0 : Number(curr)
        return num1 + num2
    })
}
const asyncfunc = () => {
    setTimeout(() => {
        console.log('test');
    }, 1000);
}

module.exports = {
    addition,
    asyncfunc
}
// 關於 mocha 如果出現錯誤，但沒顯示，
// 新增測試檔，並且directory 必須要在 test 底下
// 這個時候使用 mocha 則會執行 test 底下所有 js 
