/*************************************

项目名称：Notability
下载地址：https://t.cn/A6Cgjtei
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://github.com/2thcmoon/Loon/raw/main/Scripts/notability.js

[mitm]
hostname = notability.com

*************************************/


var obj = JSON.parse($response.body);

obj = {
  "data": {
    "processAppleReceipt": {
      "error": 0,
      "subscription": {
        "productId": "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId": "570001184068302",
        "tier": "premium",
        "refundedDate": null,
        "refundedReason": null,
        "isInBillingRetryPeriod": false,
        "expirationDate": "2099-12-31T00:00:00.000Z",
        "gracePeriodExpiresAt": null,
        "overDeviceLimit": false,
        "expirationIntent": "CUSTOMER_CANCELLED",
        "__typename": "AppStoreSubscription",
        "user": null,
        "status": "canceled",
        "originalPurchaseDate": "2022-12-31T00:00:00.000Z"
      },
      "__typename": "SubscriptionResult"
    }
  }
};

$done({body: JSON.stringify(obj)});
