export function s_to_ms(s) {
	//计算分钟
	//算法：将秒数除以60，然后下舍入，既得到分钟数
	let m;
	m = Math.floor(s / 60);
	//计算秒
	//算法：取得秒%60的余数，既得到秒数
	s = s % 60;
	//将变量转换为字符串
	m += '';
	// 包含小数点在内的四位数
	s = (''+s).substring(0,4);
	//如果只有一位数，前面增加一个0
	m = (m.length == 1) ? '0' + m : m;
	s = (s.length == 1) ? '0' + s : s;
	return m + ' minutes ' + s + " seconds";
}