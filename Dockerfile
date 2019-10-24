# Pull Python image within Alpine Linux
FROM python:3.7-alpine
MAINTAINER Alican Donmez - alicandonmez90@gmail.com

# Utilize Efficient Python in Docker Container
ENV PYTHONUNBUFFERED 1

# Create Working Directory
RUN mkdir /app
WORKDIR /app
COPY ./app /app

# Create User for security
RUN adduser -D appuser
USER appuser
