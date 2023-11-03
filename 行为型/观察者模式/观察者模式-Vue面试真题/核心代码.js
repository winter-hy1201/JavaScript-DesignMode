/**
  实现 observer  
  首先我们需要实现一个方法，这个方法会对需要监听的数据对象进行遍历、给它的属性加上定制的
 */

//监听者 Observe
function observe(target) {
  if (target && typeof target === 'object') {
    Object.keys(target).forEach((key) => {
      defineReactive(target, key, target[key])
    })
  }
}

function defineReactive(target, key, val) {
  const dep = new Dep()

  //可能传入的val值还是引用值类型，所以需要递归监听
  observe(val)

  Object.defineProperty(target, key, {
    //是否为可枚举属性
    enumerable: true,
    //不可配置
    configurable: false,
    get() {
      return val
    },
    set(newVal) {
      console.log(`${JSON.stringify(target)}属性的${key}属性value值从${val}变为了${newVal}`)
      val = newVal
      dep.notify()
    },
  })
}

//订阅者 Dep
class Dep {
  constructor() {
    //初始化订阅队列
    this.subs = []
  }

  //添加订阅者
  addSub(sub) {
    this.subs.push(sub)
  }

  //通知所有订阅者
  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

const obj = {
  a: 1,
  b: 2,
}

observe(obj)
obj.a = 2
