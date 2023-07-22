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