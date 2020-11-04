/ *
Day04函数
定义函数：函数声明关键字函数名{函数体}
* /
//声明函数函数字面量
函数 hello （） {
    控制台。日志（'Hello，function！' ）; //控制台输出
}
//直接调用
你好（）;
控制台。日志（你好）; // [Function：hello]引用函数名

//字面量
设 a  =  “ xiao” ， b  =  'xiao1' ， c  =  ' adadas` ; //弦字面量
const  oArray  =  [ ] ; //数组字面量
const  oObject  =  { } ; //对象字面量
const  oReg  = \ abc \; //正则表达式字面量，验证用户输入信息的格式

//定义函数：函数表达式
//匿名函数
const  hello  =  function （） { //函数赋值给变量
    控制台。log （'hello，javascript！' ）;
} ;
你好（）;

//命名函数
const  hello  =  function  sayHello （）{
    控制台。日志（'hello.js6' ）;
} ;
你好（）;

控制台。日志（typeof  hello ）; //功能

//定义函数：Function（）构造器，不建议使用。
const  hello  =  new  Function （“ console.log（'hello，javascript！'）” ）;

//定义函数：箭头函数（ES6添加语法）
const  hello  =  （） =>  {
    控制台。日志（'hello，js' ）;
} ;

/ *
返回值：所有函数都有返回值，函数赋值给一个变量。
    显式指定，返回值用return语句。
    没有显式指定，返回undefined。
* /
//如果没有返回，或者返回后面为空，函数的返回值就为未定义。
假设 您好 =  function （） {
    回报;
} ;
控制台。日志（sayHello （））; //未定义

假设 您好2  = 函数（） {
    令 a  =  1 ;
    返回 一个;
} ;
控制台。日志（sayHello2 （））;

/ *
参数
    形式参数（形参，parameter）：函数定义时提供的参数。
    实际参数（实参，argument）：函数调用时提供的参数。
* /
//如果调用的时候不提供实际参数，那么形参就会被赋值变量undefined
让 add  =  function （a ，b ） {
    返回 a + b ;
} ;
控制台。日志（add （））; // NaN

const  add  =  function （a ，b ）{
    返回 a + b ;
}
控制台。日志（加（1 ，2 ，3 ，4 ，5 ））;

/ *
争论
    函数被调用时，所有**实参**都会被收集到这个变量中。
    Arguments.length确定传进来多少个实参。
    函数是用箭头函数定义的，函数内部是不能访问Arguments。
* /
// arguments是对象，不是批次
const  add1  =  function （）{
    如果 （参数。长度 ==  0 ）{
        返回 0 ;
    } 否则 如果 （参数。长度 ==  1 ）{
        返回 参数[ 0 ] ;
    } 否则 如果 （参数。长度 ==  2 ）{
        返回 参数[ 0 ]  + 参数[ 1 ] ;
    }
} ;
控制台。日志（ADD1 （5 ，9 ））;

const  add3  =  function （）{
    令 sum  =  0 ;
    控制台。日志（typeof 参数）
    控制台。log （arguments  instanceof  Array ）// false
    for  （const  num  of  arguments ）{
        sum  =  num  +  sum ;
    }
    收益 总额;
}
b  =  ADD3 （1 ，2 ）;
控制台。日志（b ）;

//扩展运算符
// ...方块
const  add2  = 函数（ ...数字）{
    令 sum  =  0 ;
    控制台。日志（typeof运算 数）
    控制台。log （数字 instanceof  Array ）// true
    for  （const  num  of  number ）{ //声明数字里的每个元素
        sum  =  num  +  sum ;
    }
    收益 总额;
}
一个 =  ADD2 （1 ，2 ，2 ，3 ，3 ，4 ，4 ，5 ）;
控制台。日志（a ）;

/ *
默认参数：ES6新增语法
默认形参应该总是出现在非标准化形参之后，否则默认值就必须总是要输入。
* /
const  myName  =  function （b ， a =  'li' ）{ //定义时赋初值
    返回 b  +  a ; // +在字符串之间是连接作用
}
控制台。日志（myName （'hello' ））;

//箭头函数：ES6添加语法定义简洁
const  sayHello  =  （） =>  {
    返回 'hello，JavaScript' ;
}
控制台。日志（sayHello （））;

/ *
定义箭头函数：
    如果只有一个参数，可以不用括号。
    只有没有参数，或者有多个参数，需要用括号。
* /
const  sayHello1  =  （） =>  'hello，JavaScript' ; //一条语句{} return可以省略
控制台。日志（sayHello1 （））;

const  sayHello2  =  a  =>  {
    返回 'hello'  +  a ;
}

const  sayHello3  =  （a ，b ） =>  {
    返回 a  +  b ;
}
控制台。日志（sayHello3 （））; //调用

const  sayHello4  =  （a ，b ） =>  a  +  b ;
控制台。日志（sayHello4 （））;

/ *
函数体：函数体也可以不用大括号，但这样会改变函数的行为。
    只能有一行代码。
    省略大括号会隐式返回这行代码的值。
    如果return是唯一的语句，可以省略return。
箭头函数：
    箭头函数不能使用参数，super和new.target，也不能使用构造函数。而是，箭头函数也没有原型属性。
    这个对象。
某种（回调）：JavaScript中的函数可以像其他数据类型一样使用，一个函数也可以作为另一个函数的形参替换。
* /
//用命名函数作为某种
function  dance （）{ //定义函数dance（）
    控制台。日志（'我在跳舞！' ）;
} ;
const  dance  =  （） =>  {
    控制台。日志（'我在跳舞！' ）;
} ;

函数 sing （歌曲，回调）{
    控制台。日志（'我在唱' +  song ）;
    如果 （（typeof 回调） ==  'function' ）{
        回调（）;
    }
} ;
const  sing  =  （歌曲， 回调） =>  {
    控制台。日志（'我在唱'  +  song ）;
    如果 （（typeof 回调） ==  'function' ） {
        回调（）;
    }
} ;
唱歌（'国歌' ，跳舞）; // dance（）作为实参预设sing（）函数
//我在唱国歌我在跳舞！

//用箭头函数作为某种
const  sing  =  （歌曲， 回调） =>  {
    控制台。日志（'我在唱'  +  song ）;
    回调（）; //显式调用
} ;

唱（'生日快快乐歌' ， （） =>  {控制台。登录（'我在跳舞！' ）} ）; //我在唱生日快快乐歌我在跳舞！

/ *
应用程序：排序Array.sort（）
* /
常量 A1  =  [ 1 ，3 ，2 ，10 ，22 ，8 ] ;
const  a2  =  a1 。排序（）; //没有参数，字符串排序后赋值给另一个数组
控制台。log （a2 ）; // [1，10，2，22，3，8]


//定义函数
const  num  =  （a ，b ） =>  a - b ; //这样的函数：用于说明这两个值的相对顺序的数字
const  a3  =  a1 。排序（num ）;
控制台。log （a3 ）; // [1，2，3，8，10，22]
//若a小于b，在排序后的多个中a应该出现在b之前，则返回一个小于0的值。
//若a等于b，则返回0。
//若a大于b，则返回一个大于0的值。

/ *
应用程序：迭代
forEach（）函数
作用：对并发症的每个元素执行一次给定的函数。
语法：arr.forEach（callback（currentValue [，index [，array]]）[，thisArg]）。
* /
常量 oArray1  =  [ 1 ，2 ，2 ，4 ] ;
对于 （让 我 =  0 ; 我 <  oArray1 。长度; 我++ ） { //数组中每个元素遍历输出
    控制台。日志（oArray [ i ] ）;
}

常量 oArray2  =  [ 1 ，2 ，2 ，4 ] ;
对于 （const的 我 的 oArray2 ） {
    控制台。记录（i ）;
}

常量 oArray3  =  [ 1 ，2 ，2 ，4 ] ;
oArray3 。的forEach （（ARR1 ） =>  {控制台。日志（ARR1 ）} ）; //函数式编程

/ *
应用程序：迭代
map（）函数
作用：创建一个新表格，其结果是该多个中的每个元素是调用一次提供的函数后的返回值。
语法：const new_array = arr.map（function callback（currentValue [，index [，array]]）{// new_array的返回元素} [，thisArg]）。
* /
常量 oArray4  =  [ 1 ，2 ，2 ，4 ] ;
const  sum  =  （a ） =>  a * a ;
const  oArray5  =  oArray4 。地图（总和）; //把一个数组的元素映射到另一个数组
控制台。日志（oArray5 ）;

/ *
应用程序：迭代
reduce（）函数：统计
作用：对摘要中的每个元素执行一个提供的还原器函数（升序执行），将其结果汇总为相应的返回值。
语法：arr.reduce（callback（accumulator，currentValue [，index [，array]]）[，initialValue]）。
* /
常量 oArray1  =  [ 1 ，2 ，3 ，4 ，5 ] 。减少（（acc ，val ） =>  acc  +  val ）; //累加求和
控制台。日志（oArray1 ）;

常量 oArray1  =  [ 1 ，2 ，3 ，4 ，5 ]
//这样的函数
const  oArray2  =  oArray1 。减少（
    （acc ，curVal ） =>  acc  +  curVal
）
控制台。日志（oArray2 ）;

常量 oArray3  =  [ 1 ，2 ，3 ，4 ，5 ] 。减少（（acc ，val ） =>  acc  +  val ， 10 ）; //初始值
控制台。日志（oArray3 ）;

//统计字符
常量 句子 =  '敏捷的棕色狐狸跳过了懒惰的狗' ;
常量 词 = 句子。分割（“” ）;
控制台。日志（单词）;
const  total  = 单词。减少（（acc ， word ） =>  acc  +  word 。长度， 0 ）;
控制台。日志（总计）;

/ *
应用程序：迭代
filter（）函数：过滤
作用：创造一个新的模型，其包含通过所提供的功能实现的测试的所有元素。 
语法：var newArray = arr.filter（callback（element [，index [，array]]）[，thisArg]）。
* /
常量 A1  =  [ 1 ，2 ，3 ，12 ，8 ] ;
const  a2  =  a1 。过滤（（x ） =>  x％2 === 0 ）; //取余偶数位数
控制台。log （a2 ）;
控制台。日志（[ 1 ，2 ，3 ] 。映射（ X  =>  X * X  ）。降低（（ACC ，X ） =>  ACC  +  X  ））; //链式迭代器

//链式迭代器：所有迭代器函数都返回一个数组，这意味着可以把另一个继承器函数链在末尾，转化为应用到新数组上。
