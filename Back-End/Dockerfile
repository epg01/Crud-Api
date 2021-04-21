FROM golang

WORKDIR ${GOPATH}

RUN apt-get update -y

RUN go get github.com/githubnemo/CompileDaemon
RUN go get github.com/gorilla/mux
RUN go get github.com/joho/godotenv
RUN go get github.com/go-sql-driver/mysql

RUN mkdir src/Back-End

COPY . src/Back-End/

RUN cd src &&\
    go mod init Back-End/main.go &&\
    go mod tidy

RUN cd src/Back-End/ && go build

EXPOSE 8000