/*
  AbstractFactory（抽象工厂）
*/
class MobilePhoneFactory {
  //创建操作系统
  createOS() {
    throw new Error('抽象工厂的方法不允许直接调用,你需要将我重写!')
  }
  //创建硬件
  createHardWare() {
    throw new Error('抽象工厂的方法不允许直接调用,你需要将我重写!')
  }
}

class OS {
  //硬件控制器
  controlHardWare() {
    throw new Error('抽象工厂的方法不允许直接调用,你需要将我重写!')
  }
}

class HardWare {
  //根据命令运转
  operateByOrder() {
    throw new Error('抽象工厂的方法不允许直接调用,你需要将我重写!')
  }
}

/*
  具体工厂（ConcreteFactory）
*/
class AndroidOS extends OS {
  controlHardWare() {
    console.log('我将使用安卓系统图形化界面操控硬件')
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log('我将使用苹果系统图形化界面操控硬件')
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会用高通的硬件独有的方式去运转')
  }
}

class AppHardWare extends HardWare {
  operateByOrder() {
    console.log('我会用苹果硬件独有的方式运转')
  }
}

class AndroidPhone extends MobilePhoneFactory {
  //重写父类的方法
  createOS() {
    //提供安卓系统实例
    return new AndroidOS()
  }
  createHardWare() {
    //提供高通的硬件实例
    return new QualcommHardWare()
  }
}

//创建一个手机实例
const myAndroidPhone = new AndroidPhone()
//创建安卓系统实例
const myAndroidOS = myAndroidPhone.createOS()
//创建高通安卓硬件实例
const myHardWare = myAndroidPhone.createHardWare()
//启动安卓系统
myAndroidOS.controlHardWare()
//启动高通硬件
myHardWare.operateByOrder()
