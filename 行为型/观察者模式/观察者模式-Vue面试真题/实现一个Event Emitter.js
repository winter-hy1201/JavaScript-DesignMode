/**
  Event Bus（Vue、Flutter 等前端框架中有出镜）和 Event Emitter（Node中有出镜）出场的“剧组”不同，但是它们都对应一个共同的角色——全局事件总线。
  全局事件总线，严格来说不能说是观察者模式，而是发布-订阅模式。
  它在我们日常的业务开发中应用非常广

  Event Bus/Event Emitter 作为全局事件总线，它起到的是一个沟通桥梁的作用。
  我们可以把它理解为一个事件中心，我们所有事件的订阅/发布都不能由订阅方和发布方“私下沟通”，必须要委托这个事件中心帮我们实现。 在Vue中，有时候 A 组件和 B 组件中间隔了很远，看似没什么关系，但我们希望它们之间能够通信。
  这种情况下除了求助于 Vuex 之外，我们还可以通过 Event Bus 来实现我们的需求
  
 */

class EventEmitter {
  constructor() {
    this.handlers = {}
  }

  //安装事件监听器,接收事件名和回调函数作为参数
  on(eventName, callback) {
    //首先看看有没有同名监听函数队列
    if (!this.handlers[eventName]) {
      //没有找到就初始化一个 key为eventName value为数组的队列
      this.handlers[eventName] = []
    }

    //把回调函数推入目标事件的监听函数队列中
    this.handlers[eventName].push(callback)
  }

  //用于触发目标事件，接收事件名和事件使用的参数
  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      //执行队列中所有的监听函数
      this.handlers[eventName].forEach((callback) => {
        callback(...args)
      })
    }
  }

  //移除事件队列中指定的回调函数
  off(eventName, callback) {
    if (this.handlers[eventName]) {
      this.handlers[eventName] = this.handlers[eventName].filter((i) => i === callback)
    }
  }

  //为事件注册单次监听器
  once(eventName, callback) {
    //对回调函数进行包装，使其执行完自动被移除
    const fnWrapper = (...args) => {
      cb.apply(...args)
      this.off(eventName, callback)
    }

    this.on(eventName, fnWrapper)
  }
}
