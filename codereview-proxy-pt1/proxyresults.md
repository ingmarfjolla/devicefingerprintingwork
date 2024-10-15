using HTTP Toolkit, android x86 

1 -> First set of calls was to google play store (won't include those here)

2-> to and from FPJS servers 


## First call: 

REQUEST : 


METHOD: GET

URL
https://n6.fpconfig.net/settings_v1/IX5F84LHZhf2InPVd8lU/android?ci=android%2F2.4.0
HEADERS
Accept-Encoding:
gzip
Connection:
Keep-Alive
Host:
n6.fpconfig.net
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 9; Standard PC (i440FX + PIIX, 1996) Build/PI)

RESPONSE: 

STATUS: 200 OK
HEADERS
Alt-Svc:
h3=":443"; ma=86400
Cache-Control:
public, max-age=3669, s-maxage=584751
Connection:
keep-alive
Content-Length:
269
Content-Type:
application/octet-stream
Date:
Sun, 29 Sep 2024 15:03:52 GMT
ETag:
"pPwtwIuf3Dt5p6WZLvjv/Q+h3A0"
Server:
CloudFront
Strict-Transport-Security:
max-age=63072000; includeSubDomains; preload
Vary:
Accept-Encoding
Via:
1.1 b30e8d5c8b76c102ed260379b18e1d52.cloudfront.net (CloudFront), 1.1 141fb0b6b0e29ca7ff16dfa46d29a696.cloudfront.net (CloudFront)
X-Amz-Cf-Id:
kRvonp4fox-XAxxWAIeiR61uYyV1XfeeLHLe65XZFDqFOUwYUQS2yw==
X-Amz-Cf-Pop:
IAD55-P6
X-Amz-Cf-Pop:
ATL59-P8
X-Cache:
RefreshHit from cloudfront
X-Content-Type-Options:
nosniff

Request Body: 

file is in ./android. seems to be obfuscated / encrypted. Don't have more info on it yet. 


## Second Call

REQUEST:


HTTP/1.1
POST
METHOD: POST
URL
https://api.fpjs.io/?ci=android%2F2.4.0&q=IX5F84LHZhf2InPVd8lU
HEADERS
Accept-Encoding:
gzip
Connection:
Keep-Alive
Content-Length:
3628
Content-Type:
application/json
Host:
api.fpjs.io
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 9; Standard PC (i440FX + PIIX, 1996) Build/PI)


Request Body:

./secondcallrequest


RESPONSE:

STATUS: 200 OK
HEADERS
Connection:
keep-alive
Content-Length:
1055
Content-Security-Policy:
default-src 'none'; frame-ancestors 'none'
Content-Type:
text/plain
Date:
Sun, 29 Sep 2024 15:03:53 GMT
Referrer-Policy:
no-referrer
Set-Cookie:
_iidt=D3Xrg+NcFJJn9izKTZlA0FCBhIhpUJDcbgK4FVxh22IjfXw+9JQlXabueyRnjUrVEfj7LdXplMV3hA==; Path=/; Domain=fpjs.io; Expires=Mon, 29 Sep 2025 15:03:53 GMT; HttpOnly; Secure; SameSite=None
Strict-Transport-Security:
max-age=63072000
Timing-Allow-Origin:
*
Vary:
Origin
X-Content-Type-Options:
nosniff
X-Frame-Options:


Response Body:

./secondcallresponse


## Third call

REQUEST: 


METHOD: GET
URL
https://demo.fingerprint.com/api/event/1727622232999.OrsAZr
HEADERS
Accept:
application/json
Accept-Encoding:
gzip
Connection:
Keep-Alive
Host:
demo.fingerprint.com
Origin:
https://demo.fingerprint.com
User-Agent:
okhttp/3.14.9



RESPONSE: 

STATUS: 200 OK
HEADERS
access-control-allow-origin:
https://demo.fingerprint.com
Cache-Control:
private
CF-Cache-Status:
MISS
CF-RAY:
8cacdccfbd317fbe-IAD
Connection:
keep-alive
Content-Encoding:
gzip
Content-Type:
application/json; charset=utf-8
Date:
Sun, 29 Sep 2024 15:03:53 GMT
ETag:
"12kijo0e3ku2aq"
Server:
cloudflare
Set-Cookie:
__cf_bm=sPxtrBy_DVkGNdoPK2jYBBi.qJO9SMwiwP.8gj6YTnE-1727622233-1.0.1.1-CqrSC0RFw9g3aqcg.drP1bZJZ_sZOjUSiNAU8dVH4zvREHQPHI0bcpClbjAuy6Lwq3zFbzNvuP7CEDFnOgVjAw; path=/; expires=Sun, 29-Sep-24 15:33:53 GMT; domain=.ondigitalocean.app; HttpOnly; Secure; SameSite=None
strict-transport-security:
max-age=63072000; includeSubDomains; preload
Transfer-Encoding:
chunked
Vary:
Accept-Encoding
Via:
1.1 1b0fae92623728841ddc8494230b1c98.cloudfront.net (CloudFront)
X-Amz-Cf-Id:
hzAKK_FqMv_hnmH6ESzwd3QdodJDSXXvUikC-Z6PmgkkeEgRRgYCrA==
X-Amz-Cf-Pop:
ATL59-P2
X-Cache:
Miss from cloudfront
x-do-app-origin:
b926a52d-e6bb-11ec-b1dc-0c42a19a82a7
x-do-orig-status:
200


./thirdcallresponse