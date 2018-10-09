// 解构赋值： 为把对象中的属性或者数组中元素取出赋值给变量提供了便利
// PS: 以下浏览器环境下运行


// 基础用法1: 把变量赋值给解构表达式
var people = {
  name: 'jonathan',
  age: 18,
  height: 180,
  weight: 70
}

({name,age} = people)
console.log(name, age) // jonathan 18


// 用法2 直接把对象赋值给解构表达式
{ height, weight } = {height: 170, weight: 80}
console.log(height, weight) // 170 80


// 用法3 将对象中的属性对应的变量赋值给另一个变量
{ data: response } = {data: {code: 200, message: 'success'}}
console.log(response) // {code: 200, message: 'success'}
console.log(data) // data is not defined