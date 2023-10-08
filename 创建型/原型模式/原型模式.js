function Dog(name, age) {
  this.name = name
  this.age = age
}

Dog.prototype.eat = function () {
  console.log('狗子吃骨头')
}

const dog = new Dog('旺财', 9)

dog.eat() //沿着原型链查找原型对象的方法

// console.log('dog', dog._proto_)

// console.log('Dog', Dog.prototype)

console.log('构造函数的prototype和创造出的实例的_proto_是同一个原型对象吗?', dog.__proto__ === Dog.prototype)
