# Workshop/environments/Dockerfile
FROM python:3.8-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /env

COPY requirements.txt /env/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /env/

CMD ["python", "/env/atonixcore/manage.py", "runserver", "0.0.0.0:54678"]
