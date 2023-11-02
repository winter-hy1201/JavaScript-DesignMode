/*
  婚介所开业啦
  对于未注册的会员和不是VIP的会员做一些限制
*/
const girl = {
  // 姓名
  name: '小美',
  // 自我介绍
  aboutMe: '...', //（大家自行脑补吧）
  // 年龄
  age: 24,
  // 职业
  career: 'teacher',
  // 假头像
  fakeAvatar: 'xxxx', //(新垣结衣的图片地址）
  // 真实头像
  avatar: 'xxxx', //(自己的照片地址)
  // 手机号
  phone: 123456,
}

// 普通私密信息
const baseInfo = ['age', 'career']
// 最私密信息
const privateInfo = ['avatar', 'phone']

// 用户（同事A）对象实例
const user = {
  //...(一些必要的个人信息)
  isValidated: true,
  isVIP: false,
}

const Lovers = new Proxy(girl, {
  get(girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert('请您先完成校验再查看信息哦')
      return
    }

    if (privateInfo.indexOf(key) !== -1 && !user.isValidated && !user.isVIP) {
      alert('这个信息VIP用户才可以看哦')
      return
    }
  },
})

/*
  现在我们增加一个收礼物的功能，女生可以设置收取礼物的最低价值是多少
*/

const girl1 = {
  // 姓名
  name: '小美',
  // 自我介绍
  aboutMe: '...', //（大家自行脑补吧）
  // 年龄
  age: 24,
  // 职业
  career: 'teacher',
  // 假头像
  fakeAvatar: 'xxxx', //(新垣结衣的图片地址）
  // 真实头像
  avatar: 'xxxx', //(自己的照片地址)
  // 手机号
  phone: 123456,
  //收取礼物列表
  presents: [],
  // 拒收50块以下的礼物
  bottomValue: 50,
  // 记录最近一次收到的礼物
  lastPresent: present,
}

// 规定礼物的数据结构由type和value组成
const present = {
  type: '巧克力',
  value: 60,
}

const Lovers1 = new Proxy(girl1, {
  get(girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert('请您先完成校验再查看信息哦')
      return
    }

    if (privateInfo.indexOf(key) !== -1 && !user.isValidated && !user.isVIP) {
      alert('这个信息VIP用户才可以看哦')
      return
    }
  },
  set(girl, key, val) {
    if (key === 'lastPresent') {
      if (girl.bottomValue > val.value) {
        alert('对方拒收了你的礼物')
        return
      }

      //没有拒收则代表接收礼物成功
      girl[presents] = [...girl[present], val]
      girl[lastPresent] = val.type
    }
  },
})
