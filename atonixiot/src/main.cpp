#include <Arduino.h>

int myFunction(int a, int b)
{
  return a + b;
}

void setup()
{
  Serial.begin(115200);
  int result = myFunction(2, 3);
  Serial.println(result); // Output: 5
}

void loop()
{
  // Loop code here
}