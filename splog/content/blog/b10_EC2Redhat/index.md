---
title: Redhat Linux
date: "2021-08-27T22:40:32.169Z"
description: ""
---

Use the following commands inside a Redhat Linux EC2 instance to create an Nginx server. NB the details on how to create a domain not included. See AWS Route 53 and AWS Certificate manager for more info.

```
sudo -i
yum update
dnf update
systemctl disable --now iptables.service
systemctl disable --now ip6tables.service
systemctl disable --now etables.service
systemctl disable --now ipset.service
dnf install firewalld firewall-config firewall-applet
systemctl status firewalld
systemctl enable firewalld
firewall-cmd --state
systemctl unmask --now firewalld.service
systemctl enable --now firewalld.service
systemctl status firewalld
dnf install iptables-services ebtables ipset-service
cd /usr/share/nginx/html/
yum module list nginx
yum module enable nginx
yum install nginx
firewall-cmd --permanent --add-port={80/tcp,443/tcp}
firewall-cmd --reload
systemctl enable nginx
systemctl start nginx
yum list installed nginx
firewall-cmd --list-ports
systemctl is-enabled nginx
cd /etc/nginx
vi nginx.conf 
```

The 'vi' instruction enables a VIM editor in the console. Google for more info on this. The below is the completed example of nginx.conf.

```
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
server {
        server_name example.com;
        root /var/www/example.com/;
access_log /var/log/nginx/example.com/access.log;
error_log /var/log/nginx/example.com/error.log;


    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

# Settings for a TLS enabled server.
#
#    server {
#        listen       443 ssl http2 default_server;
#        listen       [::]:443 ssl http2 default_server;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        ssl_certificate "/etc/pki/nginx/server.crt";
#        ssl_certificate_key "/etc/pki/nginx/private/server.key";
#        ssl_session_cache shared:SSL:1m;
#        ssl_session_timeout  10m;
#        ssl_ciphers PROFILE=SYSTEM;
#        ssl_prefer_server_ciphers on;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        location / {
#        }
#
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
#    }


server {
    if ($host = example.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        server_name example.com;
    listen 80;
    return 404; # managed by Certbot


}}
```
Once nginx.conf has been updated, save and exit, then do the following in a console window:

```
mkdir -p /var/www/example.com/
mkdir /var/log/nginx/example.com/
echo "Content for example.com" > /var/www/example.com/index.html
echo "Catch All content" > /usr/share/nginx/html/index.html
dnf install policycoreutils-python-utils
dnf provides semanage
semanage fcontext -a -t httpd_sys_content_t "/var/www/example.com(/.*)?"
restorecon -Rv /var/www/example.com/
systemctl restart nginx
dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf config-manager --set-enabled PowerTools
dnf install certbot python3-certbot-nginx
nginx -t && nginx -s reload
sudo certbot --nginx -d example.com -d www.example.com
sudo certbot --nginx -d example.com -d
sudo certbot --nginx -d example.com

```
