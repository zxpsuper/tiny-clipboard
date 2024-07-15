const { version } = require('../package.json')

class TinyClipbord {
  copyList: string[]
  element: HTMLTextAreaElement
  version: string = version
  constructor() {
    this.copyList = []
    this.element = document.createElement('textarea')
    this.init()
  }
  private init() {
    if (!navigator?.clipboard && document.execCommand) {
        // Text direction is right to left or not
        // 判断文本方向是不是从右到左
        const isRTL = document.documentElement.getAttribute('dir') == 'rtl'
        this.element.style.border = '0'
        this.element.style.padding = '0'
        this.element.style.margin = '0'
        this.element.style.border = 'none'
        // in chrome, setting the width and height to be 0 that will lead to Unselectable
        // this.element.style.width = '0';
        // this.element.style.height = '0';
        this.element.style.position = 'absolute'
        // 根据文本方向设置 left or right
        // According to isRTL to set the right or left
        this.element.style[isRTL ? 'right' : 'left'] = '-9999px'
        // edge 或 ie 浏览器中，元素不存在 dom 中是无法选择和复制，同样如果 display 为 none 也是无法选择的
        // It can not be select when the element is not in dom or the attribute of display is none in ie and edge browser
        document.body.appendChild(this.element)
    }
  }
  public copy(text: string, callback: (err?: Error) => void) {
    this.element.innerText = text
    this.element.select()
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.copyList.push(text)
        callback && callback()
      })
    } else if (document.execCommand) {
      document.execCommand('selectAll')
      document.execCommand('copy')
      this.copyList.push(text)
      callback && callback()
    } else {
      callback && callback(new Error('[tiny-clipbord] copy fail'))
    }
  }
  public getHistory() {
    return this.copyList
  }
  public clearHistroy() {
    this.copyList.length = 0
  }
}

export default new TinyClipbord()
