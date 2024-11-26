import websocket
import json
import telnetlib

EMULATOR_HOST = "localhost"
EMULATOR_PORT = 5554
def send_console_command(command):
    try:
        with telnetlib.Telnet(EMULATOR_HOST, EMULATOR_PORT) as tn:
            tn.write(command.encode('ascii') + b"\n")
            response = tn.read_until(b"OK", timeout=1).decode('ascii')
            print(f"Sent: {command.strip()}, Response: {response.strip()}")
    except Exception as e:
        print(f"Failed to send command: {e}")


def on_message(ws, message):
    values = json.loads(message)['values']
    x = values[0]
    y = values[1]
    z = values[2]
    print("x = ", x , "y = ", y , "z = ", z )

    command = f"sensor set acceleration {x}:{y}:{z}"
    send_console_command(command)

def on_error(ws, error):
    print("error occurred ", error)
    
def on_close(ws, close_code, reason):
    print("connection closed : ", reason)
    
def on_open(ws):
    print("connected")
    

def connect(url):
    ws = websocket.WebSocketApp(url,
                              on_open=on_open,
                              on_message=on_message,
                              on_error=on_error,
                              on_close=on_close)

    ws.run_forever()
 
 
connect("ws://localhost:8080/sensor/connect?type=android.sensor.accelerometer") 