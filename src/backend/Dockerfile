FROM python:3.10-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/

RUN pip install --upgrade pip
RUN pip install --default-timeout=100 -r requirements.txt --verbose

COPY . /app/

CMD ["python", "apps.py", "atonixcorp.wsgi:application"]