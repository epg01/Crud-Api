// Function that connects us to the database that is hosted in a docker container in our case.

package main

import (
	"database/sql" // native code to make the connection to the database

	_ "github.com/go-sql-driver/mysql" // This module is used in the datacontroller.go file, but we don't want it here, so we ignore it.
)

// Function that connects us to the mysql database and returns two data, a pointer to the database and an error status.

func getDB() (*sql.DB, error) {
	return sql.Open("mysql", ConnectionString)
}
