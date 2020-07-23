// import TinyCopy from './index'
import TinyCopy from '../libs/TinyCopy.es5.js'
window.copy = function () {
    let text = document.getElementById('textarea').value
    TinyCopy.copy(text, err => {
        if (err) console.log(err)
        else {
            console.log('复制成功', text)
        }
    })
}
