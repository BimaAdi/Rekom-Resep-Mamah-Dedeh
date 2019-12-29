FROM python:3.7

WORKDIR /app

COPY requirement.txt .

RUN pip install -r requirement.txt

EXPOSE 8000

COPY . /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]