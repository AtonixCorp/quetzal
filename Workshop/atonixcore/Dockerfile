# Use the official Python image from the Docker Hub
FROM python:3.9.20-slim

WORKDIR /app

COPY requirements.txt .

COPY ~/.cache/pip /root/.cache/pip

RUN pip install --no-cache-dir --default-timeout=1000 -r requirements.txt

COPY . .

CMD ["python", "app.py", "manage.py" ]