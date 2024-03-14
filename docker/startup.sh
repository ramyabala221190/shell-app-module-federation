#!/bin/bash
cp /usr/share/nginx/html/shell/assets/json/config-$(cat /config/env).json /usr/share/nginx/html/shell/assets/json/config.json
envsubst "${remoteA},${remoteB}" < /etc/nginx/conf.d/nginx.config > /etc/nginx/conf.d/default.conf
echo "Starting container. Runtime environment variables. target environment=$(cat /config/env)" 
nginx -g 'daemon off;'