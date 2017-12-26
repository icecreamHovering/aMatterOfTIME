function formatTime(date) {  
  var year = date.getFullYear()  
  var month = date.getMonth() + 1  
  var day = date.getDate()  
  
  var hour = date.getHours()  
  var minute = date.getMinutes()  
  var second = date.getSeconds()  
  
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')

  /*可以将时间的年月日   时分秒分别放进一个数组，然后用数组方法改变间隔符！判断一下一位数的话就添加一个‘0’！棒！*/
}  
  
function formatNumber(n) {  
  n = n.toString()  
  return n[1] ? n : '0' + n  
}  


/*调用*/
var time = formatTime(new Date());
let date = new Date(parseInt(val) * 1000);
formatTime（date）；//时间戳转换为普通日期格式
