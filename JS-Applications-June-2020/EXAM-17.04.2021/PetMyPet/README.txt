Routes:
	'/' -> DashboardView
	'/login' -> LoginView
	'/create' -> CreateView
	'/register' -> RegisterView
	'/details/:id' -> DetailsView
	'/edit/:id' -> EditView
	'/myPets' -> MyPetsView


Execution:
	1. run 'npm install' in the root directory

	2. from root directory go to 'cd server'
	3. run 'node server.js'
	
	4. run 'npm start' in the root directory
	5. run 'npm test' in the root directory


TEST RESULTS:

    Authentication [ 20 Points ]
      √ register does not work with empty fields [ 5 Points ] (1504ms)
      √ register makes correct API call [ 5 Points ] (1239ms)
      √ login makes correct API call [ 5 Points ] (1242ms)
      √ logout makes correct API call [ 5 Points ] (1619ms)
    Navigation bar [ 5 Points ]
      √ guest user should see correct navigation [ 2 Points ] (861ms)
      √ logged user should see correct navigation [ 2 Points ] (1541ms)
      √ user should see correct navigation after click on Logout button [ 1 Points ] (2041ms)
    Catalog [ 20 Points ]
      √ show empty catalog [ 2.5 Points ] (1203ms)
      √ show catalog [ 7.5 Points ] (1128ms)
      √ show details [ 5 Points ] (1519ms)
      √ guest does NOT see edit/delete buttons [ 5 Points ] (1474ms)
    CRUD [ 45 Points ]
      √ create does NOT work with empty fields [ 5 Points ] (666ms)
      √ create makes correct API call for logged in user [ 10 Points ] (470ms)
      √ non-author does NOT see delete and edit buttons [ 5 Points ] (725ms)
      √ author sees delete and edit buttons [ 5 Points ] (734ms)
      √ edit should populate form with correct data [ 5 Points ] (1145ms)
      √ edit does NOT work with empty fields [ 5 Points ] (1513ms)
      √ edit makes correct API call for logged in user [ 5 Points ] (1164ms)
      √ delete makes correct API call for logged in user [ 5 Points ] (776ms)
    My Pets Page [ 10 Points ]
      √ the logged-in user should be able to see his/her own pets (test with 2 pets) [ 2 Points ] (779ms)
      √ the logged-in user should be able to see "No pets in database!" (test with 0 pets) [ 2 Points ] (831ms)
      √ the logged-in user should be able to view his/her own pets - detailed information [ 4 Points ] (1077ms)
      √ the logged-in user should be redirected to the Details page after click on the button "Details" [ 2 Points ] (1186ms)
    BONUS : Like functionality  [ 10 Points ]
      √ Like button is not visible for guest users [ 1 Points ] (1503ms)
      1) Like button is visible for the non-creator user [ 2 Points ]
      √ Like button is not visible for the creator [ 2 Points ] (1959ms)
      2) Like button should be hidden(not visible) after а click on it [ 2 Points ]
      3) Like button should increase total likes by 1 after a click on it [ 3 Points ]


TODO: Finish the bonus task 'Like functionality'