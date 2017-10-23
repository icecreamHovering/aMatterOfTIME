//计算过期时间
 //改变时间的显示格式 - => / ；T => ''
 const getTime = data.replace(/(\-)/g, '/').replace(/(T)/g, ' ');//data为取得时间2018-01-01T00:00:00
 //获取data的时间戳（距1970年1月1日零时的毫秒数）
 const endTime = (new Date(getTime)).getTime();
 //获取当前时间的时间戳 Data.now();也可以取到              
 const nowTime = (new Date()).getTime();
 //计算时间差               
 const lastTime = endTime - nowTime;
 //去的天数                                 60s  60min  24h
 const day = Math.floor(lastTime / 1000 / 60 / 60 / 24);
 //取得小时数           
 const h = Math.floor(lastTime / 1000 / 60 / 60 % 24);
 
 if (lastTime >= 0) {
     this.validityTime = (day > 0 ? (day + '天') : '') + (h > 0 ? (h + '小时') : '') + '后过期';
 } else {
     his.btnTxt = this.validityTime = '已过期';
 }
