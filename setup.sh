#!/bin/bash
INIT_PATH=$(pwd)
# Up gateway
cd "$INIT_PATH/gateway";
docker-compose up -d --build

# UP Users
cd "$INIT_PATH/ms-user";
docker-compose up -d --build

# UP Orders
cd "$INIT_PATH/ms-order";
docker-compose up -d --build
