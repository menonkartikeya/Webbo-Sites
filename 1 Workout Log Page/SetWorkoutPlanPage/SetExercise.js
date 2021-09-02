// mySideBar
$('.sidebtn').on('click', function () {
	$('.sidebar').toggleClass("showSidebar");
	// $('.main').toggleClass("withOpacity");
});
$('.main').on('click', function () {
	$('.sidebar').removeClass("showSidebar");
	// $('.main').removeClass("withOpacity");
});

//When page loads:
showDiv('hidden_list',this);
// On selecting from options, its plan div will be shown
function showDiv(divId, element)
{
	var stylelo = this.value != 0 ? 'block' : 'none';
    document.getElementById(divId).style.display = stylelo;

	// var e = document.getElementById("UserSelected");
	// var strUser = e.options[e.selectedIndex].text;
	// document.getElementById("userName").innerHTML=strUser +"'s Plan";
}

// Remove Button from the table
$("tbody").on("click", ".n3x5Fb", function(e) {
    // e.preventDefault();
    $(this).parent().parent().remove();
});

// Function called when Add Item button is clicked
function myFunction(e) {

	var table = document.getElementById("myTable");
	var item = document.getElementById("InputItem").value;
	var reps = document.getElementById("InputReps").value;
	var sets = document.getElementById("InputSets").value;
	var equips = document.getElementById("InputEquip").value;

	if(item=="")
		return false;
	else if(reps=="")
		return false;
	else if(sets=="")
		return false;
	
	if (isNaN(reps) || isNaN(sets)) {
		alert("Reps and Sets should be in numbers");
		return false;
	} 
	var xbtn = document.getElementById("delbtn");
	var rebt = xbtn.cloneNode(true);
	rebt.style.display = 'block';

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(-1);
	var cell2 = row.insertCell(-1);
	var cell3 = row.insertCell(-1);
	var cell4 = row.insertCell(-1);
	var cell5 = row.insertCell(-1);

	cell1.innerHTML = item;
	cell2.innerHTML = reps;
	cell3.innerHTML = sets;
	cell4.innerHTML = equips;
	cell5.appendChild(rebt);

	row.className = "zoom2 d-flex";
	cell1.className = "col-4";
	cell2.className = "col-2";
	cell3.className = "col-2";
	cell4.className = "col-3";
	cell5.className = "col-1";

	$('#AddExerciseModal').modal('hide');
}

// To stop the page from reloading everytime submit button is clicked
var forma = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
forma.addEventListener('submit', handleForm);

// Modal resets when closed:
$(".modal").on("hidden.bs.modal", function(){
	$(this).find('form').trigger('reset');
});