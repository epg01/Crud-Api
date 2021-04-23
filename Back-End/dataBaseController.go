// Here are the functions that perform mysql requests.

package main

// Function that is executed by the function that handles the GET method found
// in the routes.go file, this function reloads the data to be able to send it to the requesting server.

func getData(id string) (*employee, error) {

	db, err := getDB()

	if err != nil {

		return new(employee), err
	}

	rows, err := db.Query("SELECT * FROM Register WHERE User=?", id)

	if err != nil {
		defer db.Close()
		return new(employee), err
	}
	var rR employee

	rows.Next()
	err = rows.Scan(&rR.ID, &rR.User, &rR.State, &rR.CreateDate,
		&rR.UpdateDate)
	if err != nil {
		defer db.Close()
		return new(employee), err
	}

	return &rR, nil
}

// This function creates a new record in the Mysql database.

func enterData(newEmployee *employee) error {

	db, err := getDB()

	if err != nil {

		return err
	} else {

		// Modifica el EXEC
		_, err = db.Exec("INSERT INTO Register "+Insert+" VALUES "+Values,
			(*newEmployee).User, (*newEmployee).State, (*newEmployee).CreateDate,
			(*newEmployee).UpdateDate)

		// We close the database to free up the resources we use, since they don't believe in trees :3
		defer db.Close()

	}

	if err != nil {

		return err
	} else {

		return nil
	}

}

// This function updates a piece of information in the database by means of its ID that is unique for each user.

func updateData(newEmployee *employee, idEmployee string) (*employee, error) {

	db, err := getDB()

	if err != nil {

		return new(employee), err
	}

	_, err = db.Exec("UPDATE Register SET "+Update+" WHERE ID = ?",
		(*newEmployee).User, (*newEmployee).State,
		(*newEmployee).CreateDate, (*newEmployee).UpdateDate, idEmployee)

	if err != nil {

		defer db.Close()
		return new(employee), err
	}

	// We close the database to free up the resources we use, since they don't believe in trees :3

	defer db.Close()

	uR, err := getData(idEmployee)

	if err != nil {
		return new(employee), err
	} else {
		return uR, nil
	}
}
