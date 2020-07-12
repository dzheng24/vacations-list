// for each of the input field, create a variable that holds the input

document
  .getElementById("inputDestinationName")
  .addEventListener("change", handleDestinationName);

document
  .getElementById("inputLocation")
  .addEventListener("change", handleLocation);

document.getElementById("inputPhoto").addEventListener("change", handlePhoto);

document
  .getElementById("inputDescription")
  .addEventListener("change", handleDescription);

function handleDestinationName() {
  let data = document.getElementById("inputDestinationName").value;
  console.log(data);
}

function handleLocation() {
  let data = document.getElementById("inputLocation").value;
  console.log(data);
}

function handlePhoto() {
  let data = document.getElementById("inputPhoto").value;
  console.log(data);
}

function handleDescription() {
  let data = document.getElementById("inputDescription").value;
  console.log(data);
}

// for the click button, create function that when clicked:
// generates a card
// append the information from the input fields to the card
document.getElementById("my-button").addEventListener("click", generateCard);

function generateCard(e) {
  e.preventDefault();

  // generate card
  let newCard = document.createElement("div");
  newCard.class = "card";
  newCard.style = "width: 18rem;";

  // within card, make image
  let newImage = document.createElement("img");
  newImage.class = "card-img-top";
  newImage.src = "./test.jpeg";
  newCard.append(newImage);

  // make location
  // make description
  // make EDIT button
  // make REMOVE button

  // append card
  document.getElementById("display-area").append(newCard);
}
