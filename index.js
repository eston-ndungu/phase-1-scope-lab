// Write your solution in this file!
//Declare  variable in global scope 
var customerName = "bob"

// Modifies variable to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

// Sets best customer
function setBestCustomer() {
    bestCustomer = "not bob"
}

// Overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavouriteCustomer = "Rob"

// Does not reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    leastFavouriteCustomer = "Cain"

}


