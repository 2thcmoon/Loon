/*

Focos：https://apps.apple.com/app/id1638027598

[rewrite_local]
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v2\/users\/setup url script-response-body https://raw.githubusercontent.com/obj88/Script/main/Focos.js

[MITM]
hostname = focos.oracle.bendingspoonsapps.com

*/
var obj = JSON.parse($response.body);
obj.me.active_subscriptions_ids = ["com.focos.1y_t130_1w_bundle_creator"];
$done({ body: JSON.stringify(obj) });