const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
const addressRegex = RegExp("^[a-zA-z0-9#,]{4,}$");
const cityStateRegex = RegExp("^[a-zA-z]{4,}$");
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const emailRegex = RegExp(
  "^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$"
);

// Using array to store the contacts.
//  * We are using the push method to add the contact in the array
let addressBookArray = new Array();


/**
 * Function to check if the contact exists in array.
 * @param {*} firstName - We will pass the first name of the contact to edit
 * @param {*} lastName - We will pass the last name of the contact to edit
 * @returns Will return true if contact exists
 */

function contactExists(firstName, lastName) {
    return addressBookArray.some(
      (contact) => contact.firstName == firstName && contact.lastName == lastName
    );
  }

  /**
 *  Function to delete a contact
 * @param {} firstName - We will pass the first name of the contact to delete
 * @param {*} lastName - We will pass the last name of the contact to delete
 */
function deleteContact(firstName, lastName) {
    if (contactExists(firstName, lastName)) {
      addressBookArray = addressBookArray.filter(
        (contact) =>
          contact.firstName != firstName && contact.lastName != lastName
      );
    } else {
      console.log("Contact Does Not Exist");
    }
  }

  /**
 * Function to count the contacts in the array
 * We have used the reduce method to call the specified function for all the elements in an array.
 * @param {*} count - count of contact
 * @returns - total count
 */
function getCountOfContacts(count) {
    count += 1;
    return count;
  }
  console.log(addressBookArray);
  console.log(
    "\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0)
  );
