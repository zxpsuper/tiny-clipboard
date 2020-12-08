// import TinyClipbord from './index'
import TinyClipboard from '../libs/tiny-clipboard.umd.min'

console.log(TinyClipboard.version)
window.copy = function () {
    let text = document.getElementById('textarea').value
    TinyClipboard.copy(text, err => {
        if (err) console.log(err)
        else {
            console.log('复制成功', text)
        }
    })
}
