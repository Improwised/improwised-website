FROM node:12.14-alpine

ENV DOCKERIZE_VERSION v0.11.2

RUN wget -O /tmp/dockerize https://github.com/powerman/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-x86_64 \
    && mv /tmp/dockerize /usr/local/bin \
    && chmod a+x /usr/local/bin/dockerize

# Add nginx
RUN apk update \
  && apk add --no-cache --virtual .run-deps \
  nginx git supervisor ca-certificates

RUN chown -R nginx:nginx /var/www \
  && mkdir -p /etc/nginx \
  && mkdir -p /run/nginx \
  && mkdir -p /etc/nginx/sites-available \
  && mkdir -p /etc/nginx/sites-enabled \
  && mkdir -p /var/log/supervisor \
  && rm -Rf /var/www/* \
  && rm -Rf /etc/nginx/nginx.conf

# Create a group and user
# RUN addgroup -S nuxtgroup && adduser -S nuxtuser -G nuxtgroup

# Tell docker that all future commands should run as the appuser user
# USER nuxtuser

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

ADD rootfs /

# Install app dependencies
COPY app/*.json /home/app/

RUN npm install

# Bundle app source
COPY app /home/app

# Building build according to env
# ARG BUILD_TYPE
# COPY app/.env.$BUILD_TYPE /home/app/.env

RUN npm run build

STOPSIGNAL SIGTERM
EXPOSE 443 80

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisord.conf"]
ENTRYPOINT ["dockerize", \
    "-stdout", "/var/log/nginx/error.log"]
