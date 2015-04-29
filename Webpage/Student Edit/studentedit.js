var skillNum=0;
var acadNum=0;
var prefNum=0;
var perNum=0;
var expNum=0;




function addEntryAcademical() {
	acadNum++;
	var text = document.getElementById("entryA");
	var list = document.getElementById("academical");
	if(text.value.length>3){
	list.innerHTML += "<li id='acadEntry"+acadNum+"'>" +text.value+ " <button type='button' class='btn btn-default' id='rem-button' onclick='removeEntry(acadEntry"+acadNum+")'><span class='glyphicon glyphicon-remove'></span></button> </li>";
	}
}

function addEntrySkills() {
	skillNum++;
	var text = document.getElementById("entryS");
	var list = document.getElementById("skills");
	if(text.value.length>3){
	list.innerHTML += "<li id='skillEntry"+skillNum+"'>" +text.value+ " <button type='button' class='btn btn-default' id='rem-button' onclick='removeEntry(skillEntry"+skillNum+")'><span class='glyphicon glyphicon-remove'></span></button> </li>";
	}
}

function addEntryPref(){
	prefNum++;
	var text = document.getElementById("entryPref");
	var list = document.getElementById("preferences");
	if(text.value.length>3){
    list.innerHTML += "<li id='prefEntry"+prefNum+"'>" +text.value+ " <button type='button' class='btn btn-default' id='rem-button' onclick='removeEntry(prefEntry"+prefNum+")'><span class='glyphicon glyphicon-remove'></span></button> </li>";
	}
}

function addEntryPersonal(){
	perNum++;
	var text = document.getElementById("entryPer");
	var list = document.getElementById("personal");
	if(text.value.length>3){
    list.innerHTML += "<li id='perEntry"+perNum+"'>" +text.value+ " <button type='button' class='btn btn-default' id='rem-button' onclick='removeEntry(perEntry"+perNum+")'><span class='glyphicon glyphicon-remove'></span></button> </li>";
	}
}

function addEntryExperience(){
	expNum++;
	var text = document.getElementById("entryExp");
	var list = document.getElementById("experience");
	if(text.value.length>3){
	list.innerHTML += "<li id='expEntry"+expNum+"'>" +text.value+ " <button type='button' class='btn btn-default' id='rem-button' onclick='removeEntry(expEntry"+expNum+")'><span class='glyphicon glyphicon-remove'></span></button> </li>";
	}
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

function removeEntry(entryId) {
	entryId.remove();
}
