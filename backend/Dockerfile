# syntax=docker/dockerfile:1
FROM python:3.13.5-alpine
WORKDIR /backend
# future env variables
ENV FASTAPI_SECRETS=secret
# install api dependencies
COPY ./requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
