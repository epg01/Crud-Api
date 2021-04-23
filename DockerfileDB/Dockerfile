FROM mysql

MAINTAINER Emmanul Palacio <sixtandev@gmail.com>

VOLUME ["./mysql_data:/var/lib/mysql"]

ENV MYSQL_DATABASE=Hirings \
    MYSQL_USER=newuser \
    MYSQL_PASSWORD=password \
    MYSQL_ROOT_PASSWORD=root

COPY ./scripts/ /docker-entrypoint-initdb.d/