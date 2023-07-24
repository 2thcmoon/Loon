/*************************************

项目功能：搜图神器 解锁VIP(先登录)
下载地址：https://t.cn/A6ogWd6z
脚本作者：obj
电报频道：https://t.me/obj
使用声明：⚠️仅供参考，🈲转载与售卖！
使用方法：请先登录账号，再开脚本。

**************************************

[rewrite_local]
^http:\/\/wallpaper\.soutushenqi\.com\/api\/.+\/account\/token url script-response-body https://raw.githubusercontent.com/obj/script/main/Rewrite/soutu.js

[mitm]
hostname = wallpaper.soutushenqi.com

*************************************/


var obj = JSON.parse($response.body);

obj.data.vipPastDueTime = 4092599350000;
obj.data.vipLabel = "高级用户";
obj.data.vipLabelLevel = 4;
obj.data.vipType = 1;
obj.data.pcVipType = 1;
obj.data.pcVipPastDueTime = 4092599349000;
obj.data.vitalityVipPastDueTime = 4092599349000;
obj.data.vitalityPcVipPastDueTime = 4092599349000;

$done({body : JSON.stringify(obj)});