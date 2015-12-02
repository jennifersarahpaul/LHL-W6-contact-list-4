$(function() {

  // $("#menu").on('click', function(e) {
  //   e.preventDefault();
  //   console.log("SUCCESS");
  //   var temp = e.target.id;
  // });

// $('#newContact').get()

// $('#showAll')
// $('#showOne')
// $('#contactSearch')

// for the first 3, specify the data type as JSON
// $.get()
// $.post()
// $.ajax
// $.getJSON()


  // Displays all contacts
  var handlers = {
    container: $('#people').find('tbody'), 
    addContact: function(index, contact) {
      var tr = $("<tr>").appendTo(handlers.container);
      $("<td>").text(contact.id).appendTo(tr);
      $("<td>").text(contact.firstname).appendTo(tr);
      $("<td>").text(contact.lastname).appendTo(tr);
      $("<td>").text(contact.email).appendTo(tr);
    },
    receiveContacts: function(contacts) {
      $.each(contacts, handlers.addContact);
    }, 
    getContacts: function() {
      $.getJSON("/contacts", handlers.receiveContacts);
    }
  };
  $('#showAll').on('click', handlers.getContacts);

  // Creating a new contact
  $('#newContact').on('click', function() {
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    $.post('/contacts/new', contact, function(data) {
      if (data.result) {
        handlers.addPlayer(0, player); 
      } else {
        alert("Unable to create player.");
      }
    }, 'json');
  });
  
});