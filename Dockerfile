FROM python:3.7-alpine

# avoid more complications and things like that would be docker image when you're 
# running your python application
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

RUN mkdir /app
WORKDIR /app
COPY ./app /app

# this is for security purpose
RUN adduser -D user
USER user