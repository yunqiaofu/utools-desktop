const formRules = require("../util/formRules.js");
module.exports = {
	/**
	 * 修改用户信息
	 * @url admin/system/user/sys/update 前端调用的url参数地址
	 * data 请求参数 说明
	 * @param {String} _id 		用户ID
	 * @param {String} nickname 		昵称
	 * @param {String} gender 			性别
	 * @param {Boolean} mobile 		手机号
	 * @param {String} comment 		备注
	 * res 返回参数说明
	 * @param {Number} code 错误码，0表示成功
	 * @param {String} msg 详细信息
	 */
	main: async (event) => {
		let { data = {}, userInfo, util, filterResponse, originalParam } = event;
		let { customUtil, uniID, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: '' };
		// 业务逻辑开始-----------------------------------------------------------
		let {
			_id,
			nickname,
			gender,
			mobile,
			comment,
			allow_login_background
		} = data;
		let mobile_confirmed;
		// 参数合法校验开始-----------------------------------------------------------
		let formRulesRes = await formRules.update(event);
		if (formRulesRes.code !== 0) {
			return formRulesRes;
		}
		// 参数合法校验结束-----------------------------------------------------------

		let dbName = "uni-id-users";

		// 检测mobile
		if (mobile) {
			let num = await vk.baseDao.count({
				dbName: dbName,
				whereJson: {
					mobile: mobile,
					_id: _.neq(_id)
				}
			});
			if (num > 0) {
				return { code: -1, msg: `手机号【${mobile}】已注册!` };
			}
			mobile_confirmed = 1; // 设置该手机号为已验证(否则无法通过手机号进行登录)
		}
		// 执行数据库API请求
		res.num = await vk.baseDao.updateById({
			dbName: dbName,
			id:_id,
			dataJson: {
				nickname,
				gender,
				mobile,
				mobile_confirmed,
				comment,
				allow_login_background
			}
		});

		return res;
	}

}
