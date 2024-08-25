const int sensorPin = A0;

void setup()
{
    Serial.begin(115200); // Initialize Serial communication
    // Setup code here
}

void loop()
{
    int sensorValue = analogRead(sensorPin);
    // Use sensorValue or remove it if not needed
    Serial.println(sensorValue); // Example usage
}