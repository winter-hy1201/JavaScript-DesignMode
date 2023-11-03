/*
  观察者模式(别名 发布订阅模式):
  观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个
  目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。 —— Graphic Design Patterns
*/

//发布者类
class PubLisher {
  constructor() {
    this.observes = []
    console.log('Publisher created')
  }

  //添加订阅者
  add(observe) {
    console.log('Publisher add invoked')
    this.observes.push(observe)
  }

  //移除订阅者
  remove(observe) {
    console.log('Publisher remove invoked')
    this.observes.forEach((item, index) => {
      if (item === observe) {
        //按当前索引 删除一位
        this.observes.splice(i, 1)
      }
    })
  }

  //通知所有订阅者
  notify() {
    console.log('Publisher notify invoked')
    this.observes.forEach((observe) => {
      observe.update(this)
    })
  }
}

//订阅者类
class Observe {
  constructor() {
    console.log('Observe created')
  }
  update() {
    console.log('Observe update invoked')
  }
}

/**
    周一刚上班，前端开发李雷就被产品经理韩梅梅拉进了一个钉钉群——“员工管理系统需求第99次变更
    群”。这个群里不仅有李雷，还有后端开发 A，测试同学 B。三位技术同学看到这简单直白的群名便立刻
    做好了接受变更的准备、打算撸起袖子开始干了。此时韩梅梅却说：“别急，这个需求有问题，我需要
    和业务方再确认一下，大家先各忙各的吧”。这种情况下三位技术同学不必立刻投入工作，但他们都已
    经做好了本周需要做一个新需求的准备，时刻等待着产品经理的号召。
    一天过去了，两天过去了。周三下午，韩梅梅终于和业务方确认了所有的需求细节，于是在“员工管理
    系统需求第99次变更群”里大吼一声：“需求文档来了！”，随后甩出了"需求文档.zip"文件，同时@所有
    人。三位技术同学听到熟悉的“有人@我”提示音，立刻点开群进行群消息和群文件查收，随后根据群消
    息和群文件提供的需求信息，投入到了各自的开发里。上述这个过程，就是一个典型的观察者模式

    下面我们就来实现一下
 */

//定义一个具体的需求文档（prd）发布类
class PrdPublisher extends PubLisher {
  constructor() {
    super()
    //初始化需求文档
    this.prdState = null
    //韩梅梅还没拉群，开发群目前为空
    this.observes = []
    console.log('PrdPublisher created')
  }

  getState() {
    console.log('PrdPublisher getState invoked')
    return this.prdState
  }

  setState(state) {
    console.log('PrdPubLisher setState invoked')
    //prd值发生改变
    this.prdState = state
    //需求文档变更，立刻通知所有开发者
    this.notify()
  }
}

//订阅方 开发者 接收需求文档 开始干活
class DeveloperObserve extends Observe {
  constructor() {
    super()
    //需求文档一开始还不存在，prd为初始空对象
    this.prdState = {}
    console.log('DeveloperObserve created')
  }

  update(publisher) {
    console.log('DeveloperObserve update invoked')
    //更新需求文档
    this.prdState = publisher.getState()
    this.work()
  }

  //开始工作996...
  work() {
    const prd = this.prdState
    console.log(`看需求${JSON.stringify(prd)},然后996...`)
  }
}

//创建订阅者：前端开发
const FE = new DeveloperObserve()
//创建订阅者：服务端
const Serves = new DeveloperObserve()
//创建订阅者：测试
const Test = new DeveloperObserve()

//发布者：产品经理韩梅梅来了
const hanMeiMei = new PrdPublisher()

//韩梅梅开始拉群
hanMeiMei.add(FE)
hanMeiMei.add(Serves)
hanMeiMei.add(Test)

//更新需求文档
const prd = {
  a: '需求1',
  b: '需求2',
  c: '需求3',
}
hanMeiMei.setState(prd)
