# todos and such 

- need to focus on the sensors more than anything
- get camera working 
- proc/cpuinfo isn't being loaded currently but code seems implemented 
- bluetooth 


## interesting stuff 

The spoof useragent works well out of the box, and gives us a proper formatted android user agent. can also spoof to iphone. 

![image info](./assets/httptoolkitiphone.png)

![image info](./assets/httptoolkitandroid.png)


This doesn't seem to raise a "OS mismatch" in the VPN section below. Since the location is iceland, the detection gives us a timeszone mismatch. Interestingly, the confidence dropped in the vpn detection with a timezone mismatch from our original baseline with no timezone mismatch. 

iphone VPN signal section( VPN signal is the same for the android):
```
    "vpn": {
      "data": {
        "result": true,
        "confidence": "medium",
        "originTimezone": "Atlantic/Reykjavik",
        "originCountry": "unknown",
        "methods": {
          "timezoneMismatch": true,
          "publicVPN": false,
          "auxiliaryMobile": false,
          "osMismatch": false
        }
      }
    },
```


for the browser signal with fake IOS agent:
```
"data": {
        "visitorId": "Yt6yQCPxRI7UvhGUSyDI",
        "requestId": "1731013476901.uf0R9l",
        "browserDetails": {
          "browserName": "Chrome Mobile",
          "browserMajorVersion": "50",
          "browserFullVersion": "50.0.3765",
          "os": "iOS",
          "osVersion": "10.2.5",
          "device": "iPhone",
          "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_5; like Mac OS X) AppleWebKit/600.7 (KHTML, like Gecko) Chrome/50.0.3765.143 Mobile Safari/537.1"
        },
        "incognito": false,
        "ip": "",
        "ipLocation": {
          "accuracyRadius": 10,
          "latitude":,
          "longitude": ,
          "postalCode": "",
          "timezone": "America/New_York",
          "city": {
            "name": "Apex"
          },
          "country": {
            "code": "US",
            "name": "United States"
          },
```


fake android:

```
"identification": {
      "data": {
        "visitorId": "Yt6yQCPxRI7UvhGUSyDI",
        "requestId": "1731014970578.zwfNbT",
        "browserDetails": {
          "browserName": "Chrome Mobile",
          "browserMajorVersion": "48",
          "browserFullVersion": "48.0.3096",
          "os": "Android",
          "osVersion": "5.1.1",
          "device": "Samsung SM-G9350FG",
          "userAgent": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G9350FG Build/MMB29M) AppleWebKit/533.15 (KHTML, like Gecko) Chrome/48.0.3096.241 Mobile Safari/602.3"
        },
        "incognito": false,
```
everything is the same except browser and os. down to visitor and request ID. 




https://dev.fingerprint.com/docs/suspect-score. Suspect score drops from baseline

```
    "suspectScore": {
      "data": {
        "result": 13
      }
    },
```


but doesn't detect root even after all the installed stuff:
```
    "rootApps": {
      "data": {
        "result": false
      }
```
