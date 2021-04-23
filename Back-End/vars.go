// Security program: Obtains the credentials to be able to enter the database.
package main

import (
	"fmt"
	"os" // To get the environment variables

	"github.com/joho/godotenv" // Third-party code: to be able to read files that have the following structure. Variable = Data
)

var _ = godotenv.Load(".env-example") // We load the file called .env
var (
	ConnectionString = fmt.Sprintf("%s:%s@tcp(172.23.0.2:%s)/%s",
		os.Getenv("user"),
		os.Getenv("pass"),
		os.Getenv("port"),
		os.Getenv("db_name"))
)
