// functions to get data from individual input fields

function handleDestinationName() {
  return document.getElementById("inputDestinationName").value;
}

function handleLocation() {
  return document.getElementById("inputLocation").value;
}

function handlePhoto() {
  return document.getElementById("inputPhoto").value;
}

function handleDescription() {
  return document.getElementById("inputDescription").value;
}

// submit button event
document.getElementById("my-form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // gather up all the information, and pass it to generateCard function
  let destinationName = handleDestinationName();
  let locationName = handleLocation();
  let photo = handlePhoto();
  let description = handleDescription();

  generateCard(destinationName, locationName, photo, description);

  // clear the input data
}

function generateCard(dest, loc, picLink, desc) {
  // generate card
  let newCard = document.createElement("div");
  newCard.class = "card";
  newCard.style = "width: 18rem;";

  // within card, make image
  let newImage = document.createElement("img");
  newImage.class = "card-img-top";
  newImage.src = "./test.jpeg";
  newCard.append(newImage);

  // make new card body
  let cardBody = document.createElement("div");
  cardBody.class = "card-body";
  newCard.append(cardBody);

  // make destination name
  let newTitle = document.createElement("h5");
  newTitle.class = "card-title";
  newTitle.innerHTML = dest;
  cardBody.append(newTitle);

  // make location name
  let newSubtitle = document.createElement("h6");
  newSubtitle.class = "card-subtitle mb-2 text-muted";
  newSubtitle.innerHTML = loc;
  cardBody.append(newSubtitle);

  // make description
  let newDescription = document.createElement("p");
  newDescription.class = "card-text";
  newDescription.innerHTML = desc;
  cardBody.append(newDescription);

  // make EDIT button
  let editButton = document.createElement("button");
  editButton.class = "btn btn-warning btn-sm";
  editButton.innerHTML = "Edit";
  newCard.append(editButton);

  // make REMOVE button
  let deleteButton = document.createElement("button");
  deleteButton.class = "btn btn-danger";
  deleteButton.style.margin = "20px";
  deleteButton.innerHTML = "Remove";
  newCard.append(deleteButton);

  // append card
  document.getElementById("display-area").appendChild(newCard);
}
