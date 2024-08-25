from flask import Flask, request, jsonify
import sqlite3
import json

app = Flask(__name__)

# Database setup
def init_db():
    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS sensor_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            device_id TEXT,
            temperature REAL,
            humidity REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Root route
@app.route('/')
def index():
    return "Welcome to the IoT Data Processor API!"

# Data Ingestion Endpoint
@app.route('/data', methods=['POST'])
def receive_data():
    data = request.json
    if 'device_id' in data and 'temperature' in data and 'humidity' in data:
        device_id = data['device_id']
        temperature = data['temperature']
        humidity = data['humidity']

        # Process Data (Example: Simple validation)
        if temperature < -50 or temperature > 50:
            return jsonify({"error": "Invalid temperature value"}), 400
        if humidity < 0 or humidity > 100:
            return jsonify({"error": "Invalid humidity value"}), 400

        # Store Data
        conn = sqlite3.connect('iot_data.db')
        c = conn.cursor()
        c.execute("INSERT INTO sensor_data (device_id, temperature, humidity) VALUES (?, ?, ?)",
                  (device_id, temperature, humidity))
        conn.commit()
        conn.close()

        return jsonify({"status": "success"}), 201
    else:
        return jsonify({"error": "Invalid data format"}), 400

# Data Retrieval Endpoint
@app.route('/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect('iot_data.db')
    c = conn.cursor()
    c.execute("SELECT * FROM sensor_data ORDER BY timestamp DESC")
    rows = c.fetchall()
    conn.close()

    # Format the data
    data = []
    for row in rows:
        data.append({
            "id": row[0],
            "device_id": row[1],
            "temperature": row[2],
            "humidity": row[3],
            "timestamp": row[4]
        })

    return jsonify(data)

# Example JSON Data Parsing Endpoint
@app.route('/example', methods=['GET'])
def example_json_parsing():
    # Example JSON data
    json_data = '{"device_id": "device_1", "temperature": 23.5, "humidity": 60}'

    # Parse JSON data
    data = json.loads(json_data)

    # Access data
    device_id = data['device_id']
    temperature = data['temperature']
    humidity = data['humidity']

    # Print data
    print(f"Device ID: {device_id}")
    print(f"Temperature: {temperature}")
    print(f"Humidity: {humidity}")

    # Return the parsed data as a JSON response
    return jsonify(data)

if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(host='0.0.0.0', port=5000)