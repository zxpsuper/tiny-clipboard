// import TinyClipbord from './index'
import TinyClipbord from '../libs/tiny-clipbord.umd.min'

console.log(TinyClipbord.version)
window.copy = function () {
    let text = document.getElementById('textarea').value
    TinyClipbord.copy(text, err => {
        if (err) console.log(err)
        else {
            console.log('复制成功', text)
        }
    })
}
