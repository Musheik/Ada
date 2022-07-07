$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adacitin.feature");
formatter.feature({
  "line": 1,
  "name": "checking the booking functionality of Adacitin app",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url Of Adacitin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Entering The \"\u003cusername\u003e\" In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Entering The \"\u003cpassword\u003e\" In The Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;1"
    },
    {
      "cells": [
        "Darthvader",
        "darklord123"
      ],
      "line": 12,
      "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;2"
    },
    {
      "cells": [
        "Palaptine",
        "darkowner345"
      ],
      "line": 13,
      "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;3"
    },
    {
      "cells": [
        "HarryPotter",
        "45cupboard"
      ],
      "line": 14,
      "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;4"
    },
    {
      "cells": [
        "anivader",
        "N1l@b@nu"
      ],
      "line": 15,
      "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1059000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url Of Adacitin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Entering The \"Darthvader\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Entering The \"darklord123\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinination.user_Must_Launch_The_Url_Of_Adacitin()"
});
formatter.result({
  "duration": 2939197300,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.getUrl(BaseClass.java:60)\r\n\tat com.stepdefination.StepDefinination.user_Must_Launch_The_Url_Of_Adacitin(StepDefinination.java:43)\r\n\tat ✽.Given user Must Launch The Url Of Adacitin(Adacitin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Darthvader",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "darklord123",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinination.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 632236700,
  "status": "passed"
});
formatter.before({
  "duration": 963500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url Of Adacitin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Entering The \"Palaptine\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Entering The \"darkowner345\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinination.user_Must_Launch_The_Url_Of_Adacitin()"
});
formatter.result({
  "duration": 403359200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.getUrl(BaseClass.java:60)\r\n\tat com.stepdefination.StepDefinination.user_Must_Launch_The_Url_Of_Adacitin(StepDefinination.java:43)\r\n\tat ✽.Given user Must Launch The Url Of Adacitin(Adacitin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Palaptine",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "darkowner345",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinination.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 304423100,
  "status": "passed"
});
formatter.before({
  "duration": 135300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url Of Adacitin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Entering The \"HarryPotter\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Entering The \"45cupboard\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinination.user_Must_Launch_The_Url_Of_Adacitin()"
});
formatter.result({
  "duration": 508025200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.getUrl(BaseClass.java:60)\r\n\tat com.stepdefination.StepDefinination.user_Must_Launch_The_Url_Of_Adacitin(StepDefinination.java:43)\r\n\tat ✽.Given user Must Launch The Url Of Adacitin(Adacitin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "HarryPotter",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "45cupboard",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinination.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 356714700,
  "status": "passed"
});
formatter.before({
  "duration": 121400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Must Launch The Url Of Adacitin",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Entering The \"anivader\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Entering The \"N1l@b@nu\" In The Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinination.user_Must_Launch_The_Url_Of_Adacitin()"
});
formatter.result({
  "duration": 555625800,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_INTERNET_DISCONNECTED\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.getUrl(BaseClass.java:60)\r\n\tat com.stepdefination.StepDefinination.user_Must_Launch_The_Url_Of_Adacitin(StepDefinination.java:43)\r\n\tat ✽.Given user Must Launch The Url Of Adacitin(Adacitin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "anivader",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "N1l@b@nu",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinination.user_Click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 255890600,
  "status": "passed"
});
formatter.before({
  "duration": 155700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Hotel Search functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;hotel-search-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user Selecting The \"London\" From HotelLocation DropDown",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user Selecting The \"Hotel Creek\" From HotelSelection DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Selecting The \"Super Deluxe\" From RoomType DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Selecting The \"10\" From Numbers Of Room  DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Selecting The \"4\" From Adult Per Room DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Selecting The \"4\" From Child Per Room DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Click The search Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_HotelLocation_DropDown(String)"
});
formatter.result({
  "duration": 314003800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"location\"]\"}\n  (Session info: chrome\u003d103.0.5060.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"location\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.hotelBooking(BaseClass.java:91)\r\n\tat com.stepdefination.StepDefinination.user_Selecting_The_From_HotelLocation_DropDown(StepDefinination.java:71)\r\n\tat ✽.When user Selecting The \"London\" From HotelLocation DropDown(Adacitin.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_HotelSelection_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Super Deluxe",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_RoomType_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_Numbers_Of_Room_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_Adult_Per_Room_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_Child_Per_Room_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinination.user_Click_The_search_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 203907300,
  "status": "passed"
});
formatter.before({
  "duration": 98500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Radio Button Functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;radio-button-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "user Selecting The Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Selecting The Continue And It Navigates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinination.user_Selecting_The_Radio_Button()"
});
formatter.result({
  "duration": 45064300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"radiobutton_0\"]\"}\n  (Session info: chrome\u003d103.0.5060.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"radiobutton_0\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.radiobutton(BaseClass.java:99)\r\n\tat com.stepdefination.StepDefinination.user_Selecting_The_Radio_Button(StepDefinination.java:114)\r\n\tat ✽.When user Selecting The Radio Button(Adacitin.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinination.user_Selecting_The_Continue_And_It_Navigates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 286411500,
  "status": "passed"
});
formatter.before({
  "duration": 2673100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Hotel Book functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;hotel-book-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user Entering The \"Safwan Ali\" In The Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Entering The \"Tajudeen\" In The Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Entering The \"Mr. H.potter, the cupboard under the stairs,4,Private drive,Little Whinging, SURREY,LONDON\" In The Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Entering The \"1234567898765432\" In The Cardnumber Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Selecting The \"VISA\" From Cardtype DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Selecting The \"12\" From ExpiryMonth DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Selecting The \"2022\" From ExpiryYear DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Entering The \"365\" In The CVVnumber Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Click The Booknow Button And It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Safwan Ali",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Firstname_Field(String)"
});
formatter.result({
  "duration": 65291500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"first_name\"]\"}\n  (Session info: chrome\u003d103.0.5060.66)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2V7MRDA\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\Luman\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52653}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 56e9a8e4f1a461a1426671a1c28a0d45\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"first_name\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.Adcitin_And_Cucumber.BaseClass.passInput(BaseClass.java:78)\r\n\tat com.stepdefination.StepDefinination.user_Entering_The_In_The_Firstname_Field(StepDefinination.java:127)\r\n\tat ✽.When user Entering The \"Safwan Ali\" In The Firstname Field(Adacitin.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tajudeen",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Lastname_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr. H.potter, the cupboard under the stairs,4,Private drive,Little Whinging, SURREY,LONDON",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Billing_Address_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567898765432",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_Cardnumber_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_Cardtype_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_ExpiryMonth_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 20
    }
  ],
  "location": "StepDefinination.user_Selecting_The_From_ExpiryYear_DropDown(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "365",
      "offset": 19
    }
  ],
  "location": "StepDefinination.user_Entering_The_In_The_CVVnumber_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinination.user_Click_The_Booknow_Button_And_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 252696900,
  "status": "passed"
});
formatter.before({
  "duration": 105300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "ScreenShot functionality",
  "description": "",
  "id": "checking-the-booking-functionality-of-adacitin-app;screenshot-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "user TkesScreenshot",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinination.user_TkesScreenshot()"
});
formatter.result({
  "duration": 274185300,
  "status": "passed"
});
formatter.after({
  "duration": 89000,
  "status": "passed"
});
});