let responseData = {
  "result": {
    "data": {
      "user_is_pro": true,
      "group_is_pro": true,
      "membership_type": 3,
      "event": {
        "valid": true,
        "id": "636a0b84f70b896dbde88aa6",
        "icon": "https://raw.githubusercontent.com/Yu9191/-/main/nv5.PNG",
        "type": "member",
        "name": "baby",
        "desc": "baby love you"
      },
      "locked": false,
      "expires_date": "1888888888888888"
    },
    "code": 1
  }
};

let i = JSON.parse($response.body);

if (i && i.result && i.result.data) {
  i.result.data.user_is_pro = true;
  i.result.data.group_is_pro = true;
  i.result.data.membership_type = 2;
  i.result.data.locked = false;
  i.result.data.name = "baby";
  i.result.data.desc = "baby love you";
  i.result.data.expires_date = "1888888888888888";

  if (i.result.data.event && !i.result.data.event.icon.startsWith("https://raw.githubusercontent.com/Yu9191/-/main/nv5.PNG")) {
    i.result.data.event.icon = "https://raw.githubusercontent.com/Yu9191/-/main/nv5.PNG";
  }

  i.app && (i.app = []);
}

$done({ body: JSON.stringify(i) });