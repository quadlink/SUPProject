
function addEntryAcademical() {
	var text = document.getElementById("entryA");
	var list = document.getElementById("academical");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(text.value));
	list.appendChild(entry);
}

function addEntrySkills() {
	var text = document.getElementById("entryS");
	var list = document.getElementById("skills");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(text.value));
	list.appendChild(entry);
}

function addEntryPref(){
	var text = document.getElementById("entryPref");
	var list = document.getElementById("preferences");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(text.value));
	list.appendChild(entry);
}

function addEntryPersonal(){
	var text = document.getElementById("entryPer");
	var list = document.getElementById("personal");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(text.value));
	list.appendChild(entry);
}

function addEntryExperience(){
	var text = document.getElementById("entryExp");
	var list = document.getElementById("experience");
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(text.value));
	list.appendChild(entry);
}

function toggler(entry,button) {
if((entry.style.visibility == "visible") && (button.style.visibility=="visible")){
  entry.style.visibility = "hidden";
  button.style.visibility= "hidden";
  }
  else {
	entry.style.visibility = "visible";
	button.style.visibility= "visible";
	}
}
