FROM golang:1.20-alpine

RUN apk add --no-cache git
RUN go install github.com/cosmtrek/air@latest

WORKDIR /app

EXPOSE 3000
