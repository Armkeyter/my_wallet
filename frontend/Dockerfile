# syntax=docker/dockerfile:1
FROM node:24-alpine

WORKDIR /frontend

COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy everything else
COPY . .