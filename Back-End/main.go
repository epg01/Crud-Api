// Implementation to initial the connection with the mysql database, turn
//on the server and handle the GET, POST, PUT and DELETE (CRUD) requests of our api

package main

import (
	"fmt"      // Handle formatted output
	"log"      // If an error occurs to see through the console what happened
	"net/http" // To be able to create an http server

	"github.com/gorilla/mux" // Define the routes to be able to use the methods GET, POST, PUT and DELETE
)

func main() {

	// We first verify the connection to the database.
	db, err := getDB()

	if err != nil {
		log.Printf("Error with database" + err.Error())
		return
	} else {
		err = db.Ping()
		if err != nil {
			log.Printf("Error making connection to DB. Please check credentials. The error is: " + err.Error())
			return
		}
	}

	// Activamos el modo estricto para ingresar al servidor  API, This is;
	// http://localhost:8000/task en vez de http://localhost:8000/task/
	// I want you to specify the correct url.

	router := mux.NewRouter().StrictSlash(true)

	// To make the code more structured

	setupRouterForEmpleyee(router)

	// We turn on our server

	port := "8000"

	fmt.Printf("Server listening on port = %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, router))

	// We close the database
	defer db.Close()
}
