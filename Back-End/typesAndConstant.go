// Implementation for:
// 1. We create the schema to save the requested data in the database.
// 2. We create some variables and constants that will be used for requests to the database.
// 3. We create the Global Registry variable to save the current data from the
//    database. This is important for when we send Get requests

package main

type employee struct {
	ID         string `json:ID`
	User       string `json:User`
	State      string `json:State`
	CreateDate string `json:CreateDate`
	UpdateDate string `json:UpdateDate`
}

// Creamos una estructua de tipo employee para guardar los datos.

var (
	Register = []employee{}
)

const (
	Insert = "(User, State, CreateDate, UpdateDate)"

	Update = "User=?, State=?, CreateDate=?, UpdateDate=?"

	Values = "(?, ?, ?, ?)"
)
