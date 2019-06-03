/*水仙花数
* 打印出100-999之间所有的"水仙花数"，
* 所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。 
* 例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
*/

function daffodilNum() {
  for (var n = 100; n <= 999; n++) {
    var a = Math.floor(n / 100);
    var b = Math.floor(n % 100 / 10);
    var c = n % 10;
    if (n === a * a * a + b * b * b + c * c * c) {
      console.log(n + "是水仙花数");
    }
  }
}

daffodilNum();
console.log("------------------------------------------------------------------");

/*
* 循环n行正的等腰直角三角形
* *
* **
* ***
* ****
* ······
* ***···***（第n行有n个星号）
*/

function triangleOne(n) {
  var str = "";
  for (var i = 1; i <= n; i++) {
    str += "*";
    console.log(str);
  }
}

triangleOne(5);
console.log("------------------------------------------------------------------");

/**
 * 循环输出n行倒的等腰直角三角形（第1行有n个星号，第n行有1个星号）
 */

function triangleTwo(n) {
  for (var i = 1; i <= n; i++) {
    str = "";
    for (var j = n + 1 - i; j >= 1; j--) {
      str += "*";
    }
    console.log(str);
  }
}

triangleTwo(5);
console.log("------------------------------------------------------------------");

/**
 * 循环输出一个n（n为奇数）行等腰三角形，第（n+1/2 行有n个星号
 * *
 * ***
 * *****
 * ***
 * *
 */

function triangleThree(n) {
  for (var i = 1; i <= (n + 1) / 2; i++) {
    var str = "";
    for (var j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
  for (var i = (n + 1) / 2 + 1; i <= n; i++) {
    var str = "";
    for (var j = 1; j <= 2 * (n - i) + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

triangleThree(7);
console.log("-------------------------------------------------------------------");

/**
 * 循环输出一个n行（n为奇数）菱形
 *   *
 *  ***
 * *****
 *  ***
 *   *
 */

function rhombus(n) {
  for (var i = 1; i <= (n + 1) / 2; i++) {
    var str = "";
    for (var j = 1; j <= (n + 1) / 2 - i; j++) {
      str += " ";
    }
    for (var k = 1; k <= (i * 2) - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
  var str1 = "";
  for (var i = (n + 1) / 2 + 1; i <= n; i++) {
    var str = "", str2 = "";
    str1 += " ";
    for (var j = 1; j <= 2 * (n - i) + 1; j++) {
      str2 += "*";
    }
    str = str1 + str2;
    console.log(str);
  }
}

rhombus(5);
console.log("-------------------------------------------------------------------")

/**
 * 输出n行空心的菱形
 *   *
 *  * *
 * *   *
 *  * *
 *   *
 */

function rhombus2(n) {
  for (var i = 1; i <= (n + 1) / 2; i++) {
    var str = "";
    for (var j = 1; j <= (n + 1) / 2 - i; j++) {
      str += " ";
    }
    str += "*";
    if (i > 1) {
      for (var k = 1; k <= 2 * (i - 1) - 1; k++) {
        str += " ";
      }
      str += "*";
    }
    console.log(str);
  }
  for (var i = (n + 1) / 2 + 1; i <= n; i++) {
    var str = "";
    for (var j = i; j >= (n + 1) / 2 + 1; j--) {
      str += " ";
    }
    str += "*";
    if (i < n) {
      for (var k =i; k < n; k++) {
        str += " ";
      }
      str += "*";
    }
    console.log(str);
  }
}

rhombus2(5);
console.log("-------------------------------------------------------------------");

/**
 * 输出九九乘法表
 */

function multiplication_table() {
  for (var i = 1; i <= 9; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str += j + "x" + i + "=" + j * i + " ";
    }
    console.log(str);
  }
}

multiplication_table();
console.log("--------------------------------------------------------------------");

/**
 * 斐波那契数列前n项和
 * 斐波那契数列由0和1开始，之后的斐波那契系数就是由之前的两数相加而得出。
 */

function f(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n >= 2) {
    return f(n-1) + f(n-2);
  }
}

function sum_fibonacci(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += f(i);
  }
  console.log(sum);
}

sum_fibonacci(6);
console.log("--------------------------------------------------------------------");

/**
 * 抽奖程序
 * 假设奖池是50个数字，编写一个程序从其中抽出6个数字作为中奖数字
 */

function lottery() {
  var a = [];
  while(a.length <= 6) {
    var num = Math.floor(Math.random() * 50 + 1);
    if (a.indexOf(num) === -1) {
      a.push(num);
    }    
  }
  console.log("中奖数字为：")
  for (var i = 0; i < a.length - 1; i++) {
    console.log(a[i]);
  }
}

lottery();
console.log("--------------------------------------------------------------------");