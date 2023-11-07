/**
  "只添加，不修改"的装饰器模式

  假设我们的初始需求是：每个业务中的按钮在点击后都弹出「您还未登录哦」的弹框。
  
  按钮发布上线后，过了几天太平日子。忽然有一天，产品经理找到你，说这个弹框提示还不够明显，我们应该在弹框被关闭后把按钮的文案改为“快去登录”，同时把按钮置灰。
  听到这个消息，你立刻马不停蹄地翻出之前的代码，找到了按钮的 click 监听函数，手动往里面添加了文案修改&按钮置灰逻辑。但这还没完，因为你司的几乎每个业务里都用到了这类按钮：除了“点击打开”按钮，还有“点我开始”、“点击购买”按钮等各种五花八门的按钮，这意味着你不得不深入到每一个业务的深处去给不同的按钮添加这部分逻辑。

  有的业务不在你这儿，但作为这个新功能迭代的 owner，你还需要把需求细节再通知到每一个相关同事（要么你就自己上，去改别人的代码，更恐怖），怎么想怎么麻烦。一个文案修改&按钮置灰尚且如此麻烦，更不要说我们日常开发中遇到的更复杂的需求变更了。

  不仅麻烦，直接去修改已有的函数体，这种做法违背了我们的“开放封闭原则”；往一个函数体里塞这么多逻辑，违背了我们的“单一职责原则”。所以说这个事儿，越想越不能这么干。
    
  讲真，我想任何人去做这个需求的时候，其实都压根不想去关心它现有的业务逻辑是啥样的——你说这按钮的旧逻辑是我自己写的还好，理解成本不高；万一碰上是个离职同事写的，那阅读难度谁能预料呢？我不想接锅，我只是想对它已有的功能做个拓展，只关心拓展出来的那部分新功能如何实现，对不对？

  程序员说：“我不想努力了，我想开挂”，于是便有了装饰器模式。

  装饰器模式的优势在于其极强的灵活性和可复用性——它本质上是一个函数，而且往往不依赖于任何逻辑而存在。
  这一点提醒了我们，当我们需要用到某个反复出现的拓展逻辑时，比起自己闷头搞，不如去看一看团队（社区）里有没有现成的实现，如果有，那么贯彻“拿来主义”，直接@就可以了。所以说装饰器模式是个好同志，它可以帮我们省掉大量复制粘贴的时间。
*
 */

class OpenButton {
  onClick() {
    const modal = new Modal()
    modal.style.display = 'block'
  }
}

class Decorator {
  constructor(open_button) {
    this.open_button = open_button
  }

  onClick() {
    this.open_button.onClick()
    changeButtonStatus()
  }

  changeButtonStatus() {
    this.onClick()
    this.changeButtonStatus()
  }

  disableButton() {
    const btn = document.getElementById('open')
    btn.setAttribute('disabled', true)
  }

  changeButtonText() {
    const btn = document.getElementById('open')
    btn.innerText = '快去登录'
  }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click', function () {
  decorator.onClick()
})
