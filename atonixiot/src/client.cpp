#include <WiFi.h>
#include <HTTPClient.h>

const char *ssid = "your_SSID";
const char *password = "your_PASSWORD";

const char *serverURL = "http://your_server_ip:5000";

const char *deviceID = "device_1";

void setup()
{
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  registerDevice();
}

void loop()
{

  updateDeviceStatus("online");
  delay(10000);
}

void registerDevice()
{
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    http.begin(String(serverURL) + "/register");
    http.addHeader("Content-Type", "application/json");

    String json = "{\"device_id\":\"" + String(deviceID) + "\"}";

    int httpResponseCode = http.POST(json);
    if (httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else
    {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  }
}

void updateDeviceStatus(String status)
{
  if (WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    http.begin(String(serverURL) + "/update");
    http.addHeader("Content-Type", "application/json");

    String json = "{\"device_id\":\"" + String(deviceID) + "\", \"status\":\"" + status + "\"}";

    int httpResponseCode = http.POST(json);
    if (httpResponseCode > 0)
    {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    else
    {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  }
}