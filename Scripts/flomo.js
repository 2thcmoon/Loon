/*

项目名称：flomo
下载地址：https://t.cn/A60fKJl0
项目作者：@ios151
免责声明：仅供测试用完删除
使用说明：清除缓存再开脚本 如果你不用这个Js 看下面..
刷会员教程：手机端先登录自己账号
1.浏览器打开（最好是开无痕模式）https://v.flomoapp.com/login
2.浏览器打开（别的临时邮箱也可）https://10minutemail.net
3.获取随机邮箱并接码 填写到flomo注册地址 
4.然后登录进去左上角可以填写邀请码
5.也可以通过相关接口制作快捷指令 会的可以带带我

[rewrite_local]
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/flomo.js



[MITM]
hostname = flomoapp.com

*/
var responseData = {
    "message": "",
    "data": {
      "id": 1337564,
      "apple_mac_subscription": null,
      "referee_pro_days": 9999,
      "register_via": "ios",
      "apple_subscription": null,
      "created_at": "2023-07-22 15:20:50",
      "wechat_nickname": null,
      "email_verified_at": "2023-07-22 15:20:50",
      "pro_expired_at": "2099-09-09 23:59:59",
      "api_token": "531d142cfccac81f6920bf0c7ba1ef72",
      "language": "zh",
      "slug": "MTMzNzU2NA",
      "google_play_subscription": null,
      "referer_id": null
    },
    "code": 0
  };
  
  $done({ body: JSON.stringify(responseData) });