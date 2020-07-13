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
  clearData();
}

function generateCard(dest, loc, picLink, desc) {
  // generate card
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");

  // within card, make image
  let newImage = document.createElement("img");
  newImage.setAttribute("class", "card-img-top");

  if (picLink.length === 0) {
    newImage.setAttribute("src", "./test.jpeg");
  } else {
    newImage.setAttribute("src", picLink);
  }
  newCard.appendChild(newImage);

  // make new card body
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  newCard.appendChild(cardBody);

  // make destination name
  let newTitle = document.createElement("h5");
  newTitle.setAttribute("class", "card-title");
  newTitle.innerHTML = dest;
  cardBody.appendChild(newTitle);

  // make location name
  let newSubtitle = document.createElement("h6");
  newSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
  newSubtitle.innerHTML = loc;
  cardBody.appendChild(newSubtitle);

  // make description
  let newDescription = document.createElement("p");
  newDescription.setAttribute("class", "card-text");
  newDescription.innerText = desc;
  cardBody.appendChild(newDescription);

  // make a container to hold buttons
  let buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "button_container");
  cardBody.appendChild(buttonContainer);

  // make EDIT button
  let editButton = document.createElement("button");
  editButton.setAttribute("class", "btn btn-warning");
  editButton.innerText = "Edit";
  buttonContainer.appendChild(editButton);

  // make REMOVE button
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn btn-danger");
  deleteButton.innerText = "Remove";
  buttonContainer.appendChild(deleteButton);

  // append card
  document.getElementById("display-area").appendChild(newCard);
}

function clearData() {
  let dataToClear = document.getElementById("my-form");
  dataToClear.reset();
}
