$(function() {

  $("#menu").on('click', function(e) {
    e.preventDefault();
    console.log("SUCCESS");
    var temp = e.target.id;
  });

// $('#newContact').get()

// $('#showAll')
// $('#showOne')
// $('#contactSearch')

// for the first 3, specify the data type as JSON
// $.get()
// $.post()
// $.ajax
// $.getJSON()

$('#showAll').on('click', function() {
  $.getJSON("/contacts", function(contacts) {
    var container = $('#people').find('tbody')       //fix this line
    $.each(contacts, function(index, contact) {
      var tr = $("<tr>").appendTo(container);
      $("<td>").text(contact.id).appendTo(tr);
      $("<td>").text(contact.firstname).appendTo(tr);
      $("<td>").text(contact.lastnamename).appendTo(tr);
      $("<td>").text(contact.email).appendTo(tr);
    });
  });
});