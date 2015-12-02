$(function() {

// for the first 3, specify the data type as JSON
// $.get()
// $.post()
// $.ajax
// $.getJSON()

  // "Handlers" to reuse
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
      $('#people').toggleClass('hidden');
      $.getJSON("/contacts", handlers.receiveContacts);
    }
  };

  // Display all contacts
  $('#showAll').on('click', handlers.getContacts);

  // Create a new contact
  $('#newContact').on('click', function() {
    $('#newContactForm').toggleClass('hidden');
  });

  $('#addPerson').on('click', function(e) {
    e.preventDefault;
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var contact = {firstname: firstname, lastname: lastname, email: email};
    $.post('/contact/new', contact, function(data) {
      if (data.result) {
        handlers.addContact(0, contact); 
      } else {
        alert("Unable to create contact.");
      }
    }, 'json');
  });

  // Search for contact by name/email
  $('#contactSearch').on('click', function() {
    $('#newSearchForm').toggleClass('hidden');
  });

  // Search for contact by ID
  $('#showOne').on('click', function() {
    $('#newIdSearchForm').toggleClass('hidden');
  });
  
});
