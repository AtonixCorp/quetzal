# Workshop/atonixcore/Dockerfile
FROM python:3.8-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt /code/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /code/

CMD ["gunicorn", "--workers=3", "atonixcore.wsgi:application", "--bind", "0.0.0.0:8000"]
