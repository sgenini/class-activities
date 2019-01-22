/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
<<<<<<< HEAD
  // Add to the table here...
}

=======
  $("#table-body").empty();
  for (var i = 0; i < data.length; i++){
    var animalName = data[i].name;
    var animalLegs = data[i].numLegs;
    var animalClass = data[i].class;
    var animalWeight = data[i].weight;
    var animalNewName = data[i].whatIWouldReallyCallIt;
    $("#table-body").append(
      "<tr><td>" + animalName + 
      "</td><td>" + animalLegs + 
      "</td><td>" + animalClass + 
      "</td><td>" + animalWeight + 
      "</td><td>" + animalNewName + 
      "</td></tr>"
      )
  }
}

// function displayResults(animals) {
//   $("tbody").empty();
//   animals.forEach(function(animal){
//     var tr = $("<tr>");
//     tr.append("<td>").text(animal.name);
//     tr.append("<td>").text(animal.numLegs);
//     tr.append("<td>").text(animal.class);
//     tr.append("<td>").text(animal.weight);
//     tr.append("<td>").text(animal.whatIWouldReallyCallIt);
//   })
//   $("tbody").append(tr);
// }


>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});
<<<<<<< HEAD
=======

$("#weight-sort").on("click", function(){
  $.getJSON("/weight", function(data) {
    displayResults(data);
    $("#animal-weight").attr("class", "active");
    $("#animal-name").attr("class", "");
  });
})

$("#name-sort").on("click", function(){
  $.getJSON("/name", function(data) {
    displayResults(data);
    $("#animal-name").attr("class", "active");
    $("#animal-weight").attr("class", "");
  });
})
>>>>>>> 13edc72205dd327ee35f5f927f402c1fcf8d6646
