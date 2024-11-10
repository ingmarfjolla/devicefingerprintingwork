METHOD: POST
URL
https://app.adjust.com/session
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="046478FF2C1138E07C20ABF1011941F9BD7C6E7BACFBECBCC0E807381E1D5FF6CF3E19DAF010122532CBA9DE26881DAAC4DBAB86AF15D3A2EC5A5A6AD1A6CF08E923AAF6F5E4509E088C28AC5E1E8532584980C06C0131079FAB7A54C398FB405CD1AC5A614792E8BB3684BFFC3D58267D927CC32C659C0DF430CE24DB1A5DB4CC1BC7E91DC270F14F4E32ECEF1819CFEFBED70EEFBB5DB197DC0B74DA5A3B5816775468433D45B60DE920C3A2823B84FF319D676D27BCE14566E0B6032D2979EEBFBDA11A9FDEC72E1934D35DF11FE7",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Content-Length:
1092
Content-Type:
application/x-www-form-urlencoded
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)

Request Body:
gps_adid_attempt=1&country=US&api_level=27&hardware_name=android_x86_64-userdebug+8.1.0+OPM8.190605.005+eng.cw_huang.0622+test-keys&app_version=1.0&app_token=2fm9gkqubvpc&installed_at=2024-11-10T17%3A53%3A55.020Z-0500&created_at=2024-11-10T17%3A54%3A03.738Z-0500&wait_total=0.0&device_type=tablet&language=en&gps_adid=06521df5-9c05-42fb-ad26-bebc7ec800ee&foreground=1&connectivity_type=4&device_manufacturer=QEMU&display_width=1024&google_app_set_id=a238b8eb-9b3b-3041-a47a-d4675802f64b&device_name=Standard+PC+%28i440FX+%2B+PIIX%2C+1996%29&needs_response_details=1&os_build=OPM8.190605.005&updated_at=2024-11-10T17%3A53%3A55.020Z-0500&cpu_type=x86_64&retry_count=0&screen_size=xlarge&screen_format=normal&last_error=0&gps_adid_src=service&wait_time=0.0&os_version=8.1.0&first_error=0&android_uuid=f8ff189b-b361-48de-b21a-6e0e002f1eb9&sent_at=2024-11-10T17%3A54%3A03.764Z-0500&offline_mode_enabled=0&environment=sandbox&screen_density=medium&attribution_deeplink=1&session_count=1&display_height=720&package_name=com.adjust.examples&os_name=android&ui_mode=1&enqueue_size=0&tracking_enabled=1

Response Body:
{
  "app_token": "2fm9gkqubvpc",
  "adid": "ee20d830b4a4f09541113649b13a39ed",
  "timestamp": "2024-11-10T22:54:05.605Z+0000",
  "message": "Session tracked",
  "ask_in": 5000,
  "control_params": {}
}

Request 2:
METHOD: POST
URL
https://app.adjust.com/sdk_click
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="046478FF2C1138E07C20ABF1011941F9BD7C6E7BACFBECBCC0E807381E1D5FF6CF3E19DAF010122532CBA9DE26881DAAFC2FECCBB25E6BDCB67104D4A07C674E200A78476544C690EEA3A44A0501DE52EB5307DE86ECE8A15C979DC4B7672D6A7CCAEC90D7E8A5317A44177294D1798C2CA1650EA9159E09FE8C1F0BDA21F84B915191719DE2D050CA595FE58F1027F6F45113643973580E3472794F54AA3327387F462F49DC6D1E8DBEC2CA23AF6D04CB55167B501F3194B30C5D9DD81CA869B7008C04E68F0C07D1CD00731E841BB5",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Content-Length:
1179
Content-Type:
application/x-www-form-urlencoded
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)

Request Body:
gps_adid_attempt=1&country=US&api_level=27&hardware_name=android_x86_64-userdebug+8.1.0+OPM8.190605.005+eng.cw_huang.0622+test-keys&app_version=1.0&app_token=2fm9gkqubvpc&installed_at=2024-11-10T17%3A53%3A55.020Z-0500&session_length=0&created_at=2024-11-10T17%3A54%3A03.768Z-0500&device_type=tablet&language=en&gps_adid=06521df5-9c05-42fb-ad26-bebc7ec800ee&referrer_api=google&source=install_referrer&foreground=1&connectivity_type=4&device_manufacturer=QEMU&display_width=1024&time_spent=0&google_app_set_id=a238b8eb-9b3b-3041-a47a-d4675802f64b&device_name=Standard+PC+%28i440FX+%2B+PIIX%2C+1996%29&needs_response_details=1&os_build=OPM8.190605.005&updated_at=2024-11-10T17%3A53%3A55.020Z-0500&cpu_type=x86_64&screen_size=xlarge&screen_format=normal&gps_adid_src=service&subsession_count=1&os_version=8.1.0&google_play_instant=0&android_uuid=f8ff189b-b361-48de-b21a-6e0e002f1eb9&sent_at=2024-11-10T17%3A54%3A03.786Z-0500&referrer=utm_source%3Dgoogle-play%26utm_medium%3Dorganic&offline_mode_enabled=0&environment=sandbox&screen_density=medium&attribution_deeplink=1&session_count=1&display_height=720&package_name=com.adjust.examples&os_name=android&ui_mode=1&tracking_enabled=1

Response Body:
{
  "app_token": "2fm9gkqubvpc",
  "adid": "ee20d830b4a4f09541113649b13a39ed",
  "timestamp": "2024-11-10T22:54:05.605Z+0000",
  "message": "Click tracked"
}


Request automatic:

METHOD: GET
URL
https://app.adjust.com/attribution?gps_adid_attempt=1&api_level=27&app_version=1.0&app_token=2fm9gkqubvpc&created_at=2024-11-10T17%3A54%3A09.544Z-0500&device_type=tablet&gps_adid=06521df5-9c05-42fb-ad26-bebc7ec800ee&foreground=1&google_app_set_id=a238b8eb-9b3b-3041-a47a-d4675802f64b&device_name=Standard%20PC%20(i440FX%20%2B%20PIIX%2C%201996)&needs_response_details=1&gps_adid_src=service&initiated_by=backend&os_version=8.1.0&control_params=%7B%7D&android_uuid=f8ff189b-b361-48de-b21a-6e0e002f1eb9&sent_at=2024-11-10T17%3A54%3A09.557Z-0500&offline_mode_enabled=0&environment=sandbox&attribution_deeplink=1&package_name=com.adjust.examples&os_name=android&ui_mode=1&tracking_enabled=1
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="3BA9CE0521081CCF07A6BAA64CD5291FAF525DE704B165249FD458F57A6CF68F19545EE5DEBBB74A4CDAF0D71833C402A621CEBEE931385B650D647294832077884B098B8E516831561500AEA43E6504C70AA1C630D90F959DAFC9C2073A720E8021DBDD168AAED441627B481D11EDF829169F1F8FD33E324C3800B8645BE16B25E7DA008CA9148E6F85809D53DB06EDE96494D3371931C4EFAB0C3BFA18BFB9C58BC6D87AFD0A8C0A531685B55366E1DFD788D8368ECF4E16763D54AA00878C1AEB4435C1AFB55FB5BB6DCB1147B6FA",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)


Response:
{
  "app_token": "2fm9gkqubvpc",
  "adid": "ee20d830b4a4f09541113649b13a39ed",
  "timestamp": "2024-11-10T22:54:11.272Z+0000",
  "message": "Attribution found",
  "attribution": {
    "tracker_token": "bsrw1l",
    "tracker_name": "Organic",
    "network": "Organic",
    "engagement_time": "0001-01-01T00:00:00Z",
    "installed_at": "2024-11-10T18:53:19Z",
    "first_session_time": "2024-11-10T18:53:19Z",
    "is_reattributed": false
  },
  "control_params": {}
}


Request 3:

HTTP/1.1
POST
METHOD: POST
URL
https://app.adjust.com/event
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="32B3AF8D5FFABA1C694595B50382C763C60A3CA9FB4F1A0A1344E080B08C9870FE605242296B5030AE0BB7D5C3FB3CB8B61B36A41E96E4D01A0BAE3EAFE277B5F156AC424B622826423DCDBBEAE97F845EC2D32A08F94C2D5043FB3B3642B32C0E4746218FBFE9AEC791E5C2814311554CA98BB035E73B8B84641123F979C1081ED0D56602A1807A372340B837BF7958D0199A3EE7E5396682E04A895E38BAD7EAC796E15115B30D3AD8250A61EFD190F09BF060C72482F8FD45F343A02A358704B1B8AFA676ECF5E4E480DE8B6F5269",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Content-Length:
1149
Content-Type:
application/x-www-form-urlencoded
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)

Request Body:
country=US&api_level=27&hardware_name=android_x86_64-userdebug+8.1.0+OPM8.190605.005+eng.cw_huang.0622+test-keys&app_version=1.0&app_token=2fm9gkqubvpc&wait_total=0.0&device_type=tablet&language=en&gps_adid=06521df5-9c05-42fb-ad26-bebc7ec800ee&foreground=1&connectivity_type=4&os_build=OPM8.190605.005&cpu_type=x86_64&retry_count=0&screen_size=xlarge&gps_adid_src=service&subsession_count=1&wait_time=0.0&first_error=0&control_params=%7B%7D&sent_at=2024-11-10T17%3A57%3A50.582Z-0500&offline_mode_enabled=0&screen_density=medium&session_count=1&ui_mode=1&enqueue_size=0&gps_adid_attempt=1&event_count=1&session_length=227&created_at=2024-11-10T17%3A57%3A50.533Z-0500&device_manufacturer=QEMU&display_width=1024&event_token=g3mfiw&time_spent=227&google_app_set_id=a238b8eb-9b3b-3041-a47a-d4675802f64b&device_name=Standard+PC+%28i440FX+%2B+PIIX%2C+1996%29&needs_response_details=1&screen_format=normal&last_error=0&os_version=8.1.0&event_callback_id=PrettyRandomIdentifier&android_uuid=f8ff189b-b361-48de-b21a-6e0e002f1eb9&environment=sandbox&attribution_deeplink=1&display_height=720&package_name=com.adjust.examples&os_name=android&tracking_enabled=1



AFTER LSPOSED:
Request 1:
https://app.adjust.com/session
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="646AEB3230F2C70C2F9EA37F77B03790CFC19915DC2BD96257FD8CD3678C9EC16D5B7BAD933E35D844E515152E8271517A5E1D52D438E32E6FEC75C86BE3DE08CC3DF8C155D94E51665C410F01DB66193A31F831B6F9AF0ABB2F5A8EB9068A5291CEA5BC52380A487B39634CA7AA566249F2E9FA3C6B4A5CB757967227873F9A8914DE812C583174B7ED0D498B74C7236CC9E6F1ED5A626EC661DA02CCDEBA2066CE71E06211599FAE4DAE859246A048D8912A27C1082522ABEA05C010CD97932B851B49FA3164931020322203EFE995",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Content-Length:
1098
Content-Type:
application/x-www-form-urlencoded
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)


Request body:
fire_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&gps_adid_attempt=1&country=Iceland&api_level=27&hardware_name=PPR1.180610.011.N960USQU2CSI1&app_version=1.0&app_token=2fm9gkqubvpc&installed_at=2024-11-10T23%3A06%3A27.658Z%2B0000&created_at=2024-11-10T23%3A09%3A32.240Z%2B0000&wait_total=0.0&device_type=tablet&language=en&gps_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&foreground=1&connectivity_type=4&device_manufacturer=samsung&display_width=1400&google_app_set_id=ebd9066e-f27a-76e2-03d2-0f500dd26d72&device_name=SM-N960U&needs_response_details=1&os_build=PPE1.180610.011&updated_at=2024-11-10T23%3A06%3A27.658Z%2B0000&cpu_type=x86_64&retry_count=0&screen_size=xlarge&screen_format=normal&last_error=0&gps_adid_src=service&wait_time=0.0&os_version=9&first_error=0&android_uuid=0f40c819-71e0-4e01-91d8-bb39027dabea&sent_at=2024-11-10T23%3A09%3A32.292Z%2B0000&offline_mode_enabled=0&fire_tracking_enabled=0&environment=sandbox&screen_density=medium&attribution_deeplink=1&session_count=1&display_height=3100&package_name=com.adjust.examples&os_name=android&ui_mode=1&enqueue_size=0&tracking_enabled=1

Response:
{
  "app_token": "2fm9gkqubvpc",
  "adid": "973fea49e51cc4063e620cca67f31516",
  "timestamp": "2024-11-10T23:09:34.118Z+0000",
  "message": "Install tracked",
  "ask_in": 2000,
  "control_params": {}
}

Request autopmatic:
METHOD: GET
URL
https://app.adjust.com/attribution?fire_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&gps_adid_attempt=1&api_level=27&app_version=1.0&app_token=2fm9gkqubvpc&created_at=2024-11-10T23%3A09%3A35.116Z%2B0000&device_type=tablet&gps_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&foreground=1&google_app_set_id=ebd9066e-f27a-76e2-03d2-0f500dd26d72&device_name=SM-N960U&needs_response_details=1&gps_adid_src=service&initiated_by=sdk&os_version=9&control_params=%7B%7D&android_uuid=0f40c819-71e0-4e01-91d8-bb39027dabea&sent_at=2024-11-10T23%3A09%3A35.170Z%2B0000&offline_mode_enabled=0&fire_tracking_enabled=0&environment=sandbox&attribution_deeplink=1&package_name=com.adjust.examples&os_name=android&ui_mode=1&tracking_enabled=1
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="4B52EE3C1B2476AF02FD64DE03F1E6E328962C0802F1ED3E3408DBFB89F5A71C35C08E639FF8E666015E0A9F6C519CE1E2BACD36CC3D933B6577BAEBF60A592847F4E288A85A3EA51F868C08EF3689092DD4EA532ADA1D0DFE556E3686E9E60BDD05196D2505994B4F49B2E646C16DC5BB087BDC032110C2ACA58B38F45477AEEE1308CABE0D4425361AA897BB020459DEAFC8724F4924CE888C0D3DBDA30702BCDE8EE4897B307C6CCAC972C23BFDE8C2AA02E34E90DB24FB4A7F7BDC7269F273F3D838096CCDB392763E47D13C6323",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)

Body:
{
  "app_token": "2fm9gkqubvpc",
  "adid": "973fea49e51cc4063e620cca67f31516",
  "timestamp": "2024-11-10T23:09:36.727Z+0000",
  "message": "Attribution found",
  "attribution": {
    "tracker_token": "ignsv3w",
    "tracker_name": "Untrusted Devices::Malformed Advertising ID",
    "network": "Untrusted Devices",
    "campaign": "Malformed Advertising ID",
    "engagement_time": "0001-01-01T00:00:00Z",
    "installed_at": "2024-11-10T23:09:34Z",
    "first_session_time": "2024-11-10T23:09:34Z",
    "is_reattributed": false
  },
  "control_params": {}
}


More requests;

METHOD: POST
URL
https://app.adjust.com/session
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="1D37754C6A63FD071187C06D0DA814194176F0FF45ED2DF49D00F31827C03902B7CEB1D0FC6D80DEEF9DA985C8EA75C47173A469CF0C9A5D2435234428B517671B84E2BB8E85AED117C0FCF7A25A9976303C3E56A0F8B56AF486F2F68D6F52F620F5A1004DBCEC35889F9735171B7107287B6214B415EAC281A626E62A51E2D024C069966C5640858D1C36969C37212A1AD8CD8F176723BDD8520227956D859971B59B72FE5BECE493F525D4D49B0A35BB18320A2604B8B64975190FB65D3A8C381A6A3F8F5CB86F786CE7611FE6FD8D",adj_signing_id="1100001",algorithm="adj5",headers_i...
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Content-Length:
1098
Content-Type:
application/x-www-form-urlencoded
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)

Body:
fire_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&gps_adid_attempt=1&country=Iceland&api_level=27&hardware_name=PPR1.180610.011.N960USQU2CSI1&app_version=1.0&app_token=2fm9gkqubvpc&installed_at=2024-11-10T23%3A18%3A57.905Z%2B0000&created_at=2024-11-10T23%3A21%3A18.188Z%2B0000&wait_total=0.0&device_type=tablet&language=en&gps_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&foreground=1&connectivity_type=4&device_manufacturer=samsung&display_width=1400&google_app_set_id=3c7a7e37-16fa-994e-8aaa-b3639c0b756b&device_name=SM-N960U&needs_response_details=1&os_build=PPE1.180610.011&updated_at=2024-11-10T23%3A18%3A57.905Z%2B0000&cpu_type=x86_64&retry_count=0&screen_size=xlarge&screen_format=normal&last_error=0&gps_adid_src=service&wait_time=0.0&os_version=9&first_error=0&android_uuid=12c791ce-ac63-49bd-ad3c-1ee0c4e50dcf&sent_at=2024-11-10T23%3A21%3A18.226Z%2B0000&offline_mode_enabled=0&fire_tracking_enabled=0&environment=sandbox&screen_density=medium&attribution_deeplink=1&session_count=1&display_height=3100&package_name=com.adjust.examples&os_name=android&ui_mode=1&enqueue_size=0&tracking_enabled=1

Request:
METHOD: POST
URL
https://app.adjust.com/event
HEADERS
Accept-Encoding:
gzip
Authorization:
Signature signature="62E3C28F50323CB84155D37E413BC908FB512731EB8085151C79504E260D7864CCCD082A52E0A96953E66C7074A6B90725AA4D377532B4056A7B22AE5ACBCC01085C801CA2FE0E2DAB11D6F33D72F9B019CB33A81EFDE6942D63CBAD4E262682CD93662D3C83077006F5213D9645AF4696A14BAE9E4685408B570F99F86F856273234BD9C46429FDD8DFE3FC813CF744C0B80C4DDAEF986C5C690FD249A59B7D8862C5A33BA0D208502F9CFACAC6A976CE6A4A004108D952B35069ED597A5B54375870FC8107AB32EB558DB6D38EDF02",adj_signing_id="1100001",algorithm="adj5",headers_id="5",native_version="3.32.0"
Client-SDK:
android5.0.1
Connection:
Keep-Alive
Content-Length:
1151
Content-Type:
application/x-www-form-urlencoded
Host:
app.adjust.com
User-Agent:
Dalvik/2.1.0 (Linux; U; Android 8.1.0; Standard PC (i440FX + PIIX, 1996) Build/OPM8.190605.005)

Body:
fire_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&country=Iceland&api_level=27&hardware_name=PPR1.180610.011.N960USQU2CSI1&app_version=1.0&app_token=2fm9gkqubvpc&wait_total=0.0&device_type=tablet&language=en&gps_adid=84630630-u4ls-k487-f35f-h37afe0pomwq&foreground=1&connectivity_type=4&os_build=PPE1.180610.011&cpu_type=x86_64&retry_count=0&screen_size=xlarge&gps_adid_src=service&subsession_count=1&wait_time=0.0&first_error=0&control_params=%7B%7D&sent_at=2024-11-10T23%3A23%3A51.332Z%2B0000&offline_mode_enabled=0&fire_tracking_enabled=0&screen_density=medium&session_count=1&ui_mode=1&enqueue_size=0&gps_adid_attempt=1&event_count=1&session_length=153&created_at=2024-11-10T23%3A23%3A51.267Z%2B0000&device_manufacturer=samsung&display_width=1400&event_token=g3mfiw&time_spent=153&google_app_set_id=3c7a7e37-16fa-994e-8aaa-b3639c0b756b&device_name=SM-N960U&needs_response_details=1&screen_format=normal&last_error=0&os_version=9&event_callback_id=PrettyRandomIdentifier&android_uuid=12c791ce-ac63-49bd-ad3c-1ee0c4e50dcf&environment=sandbox&attribution_deeplink=1&display_height=3100&package_name=com.adjust.examples&os_name=android&tracking_enabled=1