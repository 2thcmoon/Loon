var responseData = {
    "result": {
      "data": {
        "user_is_pro": true,
        "group_is_pro": true,
        "membership_type": 5,
        "event": {
          "valid": true,
          "id": "636a0b84f70b896dbde88aa6",
          "icon": "https://raw.githubusercontent.com/Yu9191/-/main/nv5.PNG",
          "type": "member",
          "name": "baby",
          "desc": "Baby wish you happy every day"
        }
      },
      "code": 1
    }
  };
  
  $done({ body: JSON.stringify(responseData) });