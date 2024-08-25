import serial
import requests
import time
import csv

ARDUINO_PORT = 'COM3'
ARDUINO_BAUD_RATE = 9600
THINGSPEAK_WRITE_API_KEY = 'YOUR_THINGSPEAK_WRITE_API_KEY'
OPENWEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY'
CITY_NAME = 'YOUR_CITY_NAME'
CSV_FILE_PATH = 'temperature_data.csv'

def send_to_thingspeak(temperature):
    url = f"https://api.thingspeak.com/update?api_key={THINGSPEAK_WRITE_API_KEY}&field1={temperature}"
    response = requests.get(url)
    print(f"Data sent to ThingSpeak: {temperature} °C, Response: {response.text}")

def get_weather():
    url = f"http://api.openweathermap.org/data/2.5/forecast?q={CITY_NAME}&appid={OPENWEATHER_API_KEY}&units=metric"
    response = requests.get(url)
    if response.status_code == 200:
        weather_data = response.json()
        for forecast in weather_data['list']:
            print(f"Date: {forecast['dt_txt']}, Temperature: {forecast['main']['temp']} °C")
    else:
        print("Error fetching weather data")

def log_to_csv(temperature):
    with open(CSV_FILE_PATH, mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([time.strftime("%Y-%m-%d %H:%M:%S"), temperature])

def main():
    with serial.Serial(ARDUINO_PORT, ARDUINO_BAUD_RATE, timeout=1) as ser:
        time.sleep(2)
        print("Starting to read data from Arduino...")
        
        while True:
            if ser.in_waiting > 0:
                line = ser.readline().decode('utf-8').rstrip()
                try:
                    temperature = float(line)
                    print(f"Temperature read from Arduino: {temperature} °C")
                    log_to_csv(temperature)
                    send_to_thingspeak(temperature)
                except ValueError:
                    print("Received invalid data from Arduino.")

            if time.time() % 600 < 1:
                get_weather()
            
            time.sleep(1)

if __name__ == '__main__':
    main()