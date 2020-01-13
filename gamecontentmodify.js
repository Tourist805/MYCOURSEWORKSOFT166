function changeText() {
  var element = document.getElementById("HeaderText");
  var ButtonPara = document.getElementById("ButtonPara");
  element.innerHTML = "You pressed the button";
  if (element.style.color == "blue") {
    element.style.color = "red";
    ButtonPara.innerHTML = ButtonPara.innerHTML + "Red ";
  } else {
    element.style.color = "blue"
    ButtonPara.innerHTML = ButtonPara.innerHTML + "Blue ";
  }
};

// Verfify the users name against record
function checkName() {
  var element = document.getElementById("Name");

  if (element.value == "Zhanybek") {
    var header = document.getElementById("HeaderText");
    header.innerHTML = "Welcome Zhanybek";
    // Modify the label
    var NameLabel = document.getElementById("NameLabel");
    NameLabel.innerHTML = "User Identified";
    // Create Subtext
    var Subtext = document.getElementById("Subtext");
    Subtext.innerHTML = "<i class='material-icons' style='color:green'>person_pin</i> <b>User is validated</b>";
    // Modify Image
    var Image = document.getElementById("Image");
    Image.src = "ME.jpg";

    // Change Lights
    for (var currentLightID = 0; currentLightID < 20; currentLightID++) {
      togglelight(currentLightID);
    }

// Perform checks against length
  } else if (element.value.length == 0) {
    var header = document.getElementById("HeaderText");
    header.innerHTML = "Hi PALs students";
    resetTags();
  } else if (element.value.length == 9) {
    var Subtext = document.getElementById("Subtext");
    Subtext.innerHTML = "<i class='material-icons' style='color:red'>warning</i> <b>Max length reached</b>";
  } else {
    resetTags();
  }
};

// Resets page back to the defaults
function resetTags() {
  // Modify the label
  var NameLabel = document.getElementById("NameLabel");
  NameLabel.innerHTML = "User's Name";
  // Modify Image
  var Image = document.getElementById("Image");
  Image.src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/09/14/sleep.jpg?w968h681";
  // Header
  var header = document.getElementById("HeaderText");
  header.innerHTML = "Please Identify Yourself";
  // Subtext
  var Subtext = document.getElementById("Subtext");
  Subtext.innerHTML = "";

}
