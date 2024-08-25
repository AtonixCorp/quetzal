python
from flask import Flask, request, jsonify

app = Flask(__name__)

devices = {}

@app.route('/register', methods=['POST'])
def register_device():
    device_id = request.json.get('device_id')
    if device_id not in devices:
        devices[device_id] = {'status': 'offline'}
        return jsonify({'message': 'Device registered successfully'}), 201
    return jsonify({'message': 'Device already registered'}), 400

@app.route('/update', methods=['POST'])
def update_device():
    device_id = request.json.get('device_id')
    status = request.json.get('status')
    if device_id in devices:
        devices[device_id]['status'] = status
        return jsonify({'message': 'Device status updated'}), 200
    return jsonify({'message': 'Device not found'}), 404

@app.route('/devices', methods=['GET'])
def list_devices():
    return jsonify(devices), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
