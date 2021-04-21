// Implementation to load the data contained in the database.
// Every time we do a Get, we load this data to
// make sure we show only the current data.

package main

func reloadData() error {

	// First we enter the database and verify any errors generated.

	db, err := getDB()
	if err != nil {
		return err
	}

	// We make the corresponding request to the database.

	rows, err := db.Query("SELECT * FROM Register")
	if err != nil {
		defer db.Close()
		return err
	}

	Register = Register[0:0]

	// We iterate the rows of the database.
	for rows.Next() {
		// In each step, scan one row

		var rR employee // reload Database
		err = rows.Scan(&rR.ID, &rR.User, &rR.State, &rR.CreateDate,
			&rR.UpdateDate)
		if err != nil {
			defer db.Close()
			return err
		}

		Register = append(Register, rR)
	}

	// we close the database
	defer db.Close()

	return nil
}
