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
class Contact {
    /**
     * Constructor
     * @param  {...any} param - above mentioned fields.
     */
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.city = params[2];
      this.state = params[3];
      this.zip = params[4];
      this.phoneNumber = params[5];
      this.email = params[6];
    }
    /**
     * Getters for all fields
     */
    get firstName() {
      return this._firstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    get city() {
      return this._city;
    }
  
    get state() {
      return this._state;
    }
  
    get zip() {
      return this._zip;
    }
  
    get phoneNumber() {
      return this._phoneNumber;
    }
  
    get email() {
      return this._email;
    }
    /**
     * Setters for all fields
     */
    set firstName(firstName) {
      if (nameRegex.test(firstName)) this._firstName = firstName;
      else throw "**** FIRST NAME is Incorrect ****";
    }
  
    set lastName(lastName) {
      if (nameRegex.test(lastName)) this._lastName = lastName;
      else throw "**** LAST NAME is Incorrect ****";
    }
  
    set address(address) {
      if (addressRegex.test(address)) this._address = address;
      else throw "**** ADDRESS is Incorrect ****";
    }
  
    set city(city) {
      if (cityStateRegex.test(city)) this._city = city;
      else throw "**** CITY is Incorrect ****";
    }
  
    set state(state) {
      if (cityStateRegex.test(state)) this._state = state;
      else throw "**** STATE is Incorrect ****";
    }
  
    set zip(zip) {
      if (zipRegex.test(zip)) this._zip = zip;
      else throw "**** ZIP is Incorrect ****";
    }
  
    set phoneNumber(phoneNumber) {
      if (phoneNumberRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
      else throw "**** PHONE NUMBER is Incorrect ****";
    }
  
    set email(email) {
      if (emailRegex.test(email)) this._email = email;
      else throw "**** EMAIL ADDRESS is Incorrect ****";
    }
    /**
     * To String Method
     * @returns - Contact object in String form.
     */
    toString() {
      return (
        "First Name : " +
        this.firstName +
        ", Last Name : " +
        this.lastName +
        ", City : " +
        this.city +
        ", State : " +
        this.state +
        ", Zip : " +
        this.zip +
        ", Phone Number : " +
        this.phoneNumber +
        ", Email : " +
        this.email
      );
    }
  }
  

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
 
  function getCountOfContactsByCity(city) {
    return (
      "Count of Contacts in " +
      city +
      " is: " +
      addressBookArray.filter((contact) => contact.city == city).length
    );
  }

  function getCountOfContactsByCity(city) {
    return (
      "Count of Contacts in " +
      city +
      " is: " +
      addressBookArray.filter((contact) => contact.city == city).length
    );
  }

  function sortAddressBookByCity() {
    addressBookArray.sort((firstPerson, secondPerson) =>
      firstPerson.city.localeCompare(secondPerson.city)
    );
    console.log(addressBookArray);
  }
  
  function sortAddressBookByState() {
    addressBookArray.sort((firstPerson, secondPerson) =>
      firstPerson.state.localeCompare(secondPerson.state)
    );
    console.log(addressBookArray);
  }