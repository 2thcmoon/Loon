/*************************************

项目名称：Notability
下载地址：https://t.cn/A6Cgjtei
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/2thcmoon/Loon/Scripts/main/notability.js

[mitm]
hostname = notability.com

*************************************/


var ojbk = JSON.parse($response.body);

ojbk = {
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
        "expirationDate": "2099-12-31T23:59:59.999Z",
        "gracePeriodExpiresAt": null,
        "overDeviceLimit": false,
        "expirationIntent": "CUSTOMER_CANCELLED",
        "__typename": "AppStoreSubscription",
        "user": null,
        "status": "canceled",
        "originalPurchaseDate": "2022-12-31T23:59:59.999Z"
      },
      "__typename": "SubscriptionResult"
    }
  }
};

$done({body: JSON.stringify(ojbk)});
