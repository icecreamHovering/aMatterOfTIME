//计算过期时间
 //改变时间的显示格式 - => / ；T => ''
 const getTime = data.replace(/(\-)/g, '/').replace(/(T)/g, ' ');//data为取得时间2018-01-01T00:00:00
 //获取data的时间戳（距1970年1月1日零时的毫秒数）
 const endTime = (new Date(getTime)).getTime();
 //获取当前时间的时间戳 Data.now();也可以取到              
 const nowTime = (new Date()).getTime();
 //计算时间差               
 const lastTime = endTime - nowTime;
 //去的天数                         1000ms  60s  60min  24h
 const day = Math.floor(lastTime / 1000 / 60 / 60 / 24);
 //取得小时数           
 const h = Math.floor(lastTime / 1000 / 60 / 60 % 24);
 
 if (lastTime >= 0) {
     this.validityTime = (day > 0 ? (day + '天') : '') + (h > 0 ? (h + '小时') : '') + '后过期';
 } else {
     his.btnTxt = this.validityTime = '已过期';
 }

 
//创建一个新日期对象Data不传参数创建的对象自动获得当前日期和时间
var data = new Date();
//去的当前时间
var start = Date.now();
 
//Data 有两个方法 Data.parse(); Data.UTC()；
//Data.parse()方法接收一个表示日期的字符串参数；直接将表示日期的字符串传给Data，亦会在后台调用Data.parse();
var someData = new Date(Date.parse("May 25,2017"));
var someData = new Date("May 25,2017");
 
//GMT时间（格林尼治标准时间）一般指世界时， 即0时区的区时，比北京时间（东8区）晚8小时；  GMT + 8 = 北京时间
//Data.UTC()方法接收的是年份、基于0的月份、天数、小时、分钟、秒、毫秒，其中只有年份和月份是必须的
var utcData = new Date(Date.UTC(2017,0));//2017年1月  GMT时间
var utcData = new Date(2017,0);//创建的是本地的时间，非GMT时间


//日期格式化方法
toDateString()  //以特定于实现的格式显示星期几、月、日和年
toTimeString()  //以特定于实现的格式显示时、分、秒和时区
toLocalDateString()  //以特定于地区的格式显示星期几、月、日和年
toLocalTimeString()  //以特定于实现的格式显示时、分、秒
toUTCString()  //以特定于实现的格式显示完整的UTC日期
toLocalString() toString()  //格式化时间

 
//日期、时间组件方法
getTime()  //返回表示日期的毫秒数；与valueOf()方法返回的值相同
setTime()  //以毫秒数设置日期，会改变整个日期

getFullYear()  //取得4位数的年份
setFullYear()  //设置日期的年份  必须传4位数

getMonth()  //返回日期中的月份，0表示1月
setMonth()  //设置日期的月份，传入的月份值必须大于0？？超过11则增加年份
 
getDate()  //返回日期月份中的天数（1-31）
setData()  //设置日期中的天数，传入的值超过当月应有的天数则增加月份

getDay()  //返回日期中星期的星期几，0表示星期日，6表示星期六

getHours()  //返回日期中的小时数（0-23）
setHours()  //设置日期中的小时数，超过23则增加日期中天数

getMinutes()  //返回日期中的分钟数
setMinutes()  //设置分钟数，传入值超过59则增加小时数
 
getSeconds()  //返回日期中的秒数
setSeconds()  //设置秒数
 
getMilliseconds()  //返回日期中的毫秒数
setMilliseconds()  //设置日期中的毫秒数
