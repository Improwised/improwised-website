module.exports = {
    "ci": {
      "collect": {
        "numberOfRuns": 1,
        "headful": false,
        "chromePath": process.env.CHROME_PATH ,
        "settings": {
          "additive": "true",
          "chromeFlags": "--no-sandbox --disable-dev-shm-usage"
        },
        "staticDistDir": "./public",
      }
    }
  };
