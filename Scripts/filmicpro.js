/*************************************

项目功能：filmicpro 解锁高级功能
下载地址：https://t.cn/AiE8fHDr
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/filmicpro\.oracle\.bendingspoonsapps\.com\/v\d\/users\/setup url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/filmicpro.js

[mitm]
hostname = filmicpro.oracle.bendingspoonsapps.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023["me"]["active_subscriptions_ids"] = ["com.cinegenix.filmic.pro.1y_t80_1w_bis"];
chxm1023["settings"]["__identity__"]["expiration"] = "2099-12-31T00:00:00.00+00:00";

$done({body : JSON.stringify(chxm1023)});