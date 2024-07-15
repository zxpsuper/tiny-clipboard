import tinyClipbord from './index'
// import TinyClipboard from '../libs/tiny-clipboard.umd.min'
console.log(tinyClipbord)
window.copy = function () {
    let text = document.getElementById('textarea').value
    tinyClipbord.copy(text, err => {
        if (err) console.log(err)
        else {
            console.log('复制成功', text)
        }
    })
}
