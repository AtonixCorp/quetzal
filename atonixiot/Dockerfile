
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN if [ -f "requirements.txt" ]; then pip install --no-cache-dir -r requirements.txt; fi

RUN pip install platformio

COPY data_processors/ ./data_processors/
COPY devices_manager/ ./devices_manager/
COPY arduino_project/ ./arduino/

EXPOSE 80

ENV NAME IoTApp

CMD ["platformio", "run", "--project-dir", "./arduino", "--target", "upload"]