/*
现在我们一起来总结一下什么是工厂模式：
工厂模式其实就是**将创建对象的过程单独封装**。
它很像我们去餐馆点菜：比如说点一份西红柿炒蛋，我们不用关心西红柿怎么切、怎么打鸡蛋这些菜品制作过程中的问题，我们只关心摆上桌那道菜。在工厂模式里，我传参这个过程就是点菜，工厂函数里面运转的逻辑就相当于炒菜的厨师和上桌的服务员做掉的那部分工作——这部分工作我们同样不用关心，我们只要能拿到工厂交付给我们的实例结果就行了。

总结一下：工厂模式的目的，就是为了实现**无脑传参**，就是为了爽！

*/

function User(name, age, career, work) {
  this.name = name
  this.age = age
  this.career = career
  this.work = work
}

function Factory(name, age, career) {
  let work
  switch (career) {
    case 'coder':
      work = ['写代码', '改bug']
      break

    case 'project manager':
      work = ['这个需求很急', '你加个班吧', '这是客户想要的功能']
      break
  }
  return new User(name, age, career, work)
}

console.log(Factory('小曹', 18, 'coder'))
console.log(Factory('徐冉', 22, 'project manager'))
