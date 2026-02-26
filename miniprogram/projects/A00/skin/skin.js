module.exports = {
	PID: 'A00', //后援会粉丝团

	NAV_COLOR: '#ffffff',
	NAV_BG: '#FE2746',

	MEET_NAME: '活动', 
 
	MENU_ITEM: ['首页', '活动日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=爱豆动态|leftbig2,2=爱豆故事|leftbig3,3=粉丝动态,4=地方分会',
	MEET_TYPE: '1=粉丝活动,2=应援活动',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}