#!/bin/bash
cp /usr/share/nginx/html/assets/json/config-$(cat /config/env).json /usr/share/nginx/html/assets/json/config.json
envsubst < /usr/share/nginx/html/assets/manifest/mf-temp.manifest.json > /usr/share/nginx/html/assets/manifest/mf.manifest.json
#envsubst "${dockerHost}," < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf
echo "Starting container. Runtime environment variables. target environment=$(cat /config/env)" 
nginx -g 'daemon off;'