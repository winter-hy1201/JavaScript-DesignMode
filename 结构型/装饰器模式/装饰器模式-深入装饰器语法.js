function classDecorator(target) {
  console.log(target)
}

function funcDecorator(target, name, descriptor) {
  let originalMethod = descriptor.value
  descriptor.value = function () {
    console.log('我是Func的装饰器逻辑')
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}

@classDecorator
class Button {
  @funcDecorator
  onClick() {
    console.log('我是Func的原有逻辑')
  }
}

const button = new Button()
console.log(Button.hasDecorator)
