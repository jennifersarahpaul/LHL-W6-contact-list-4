$(function() {

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

  // Instagram API
  $(function() {
    $('#diversionButton').on('click', function() {
      $.ajax({
        url: "https://api.instagram.com/v1/tags/christmasdecorations/media/recent?access_token=2306730953.5b9e1e6.2b20db39aea648f384af7a1a2475175f",
        success: function(response){
          console.log(response)
          for(var i = 0; i <= 20; i++) {
            var imageUrl = response.data[i].images.standard_resolution.url;
            var itemClass;
            i === 0 ? itemClass = "item active" : itemClass = 'item';
            var image = '<div class="' + itemClass + '"><img src="'+imageUrl+ '" alt="..."/></div>';
            $('#showingPicture').append(image);
          };
          $('.carousel').carousel();
        },
        dataType: 'jsonp'
      });
    });
  });
  // my access_token: 2306730953.1cbb547.5a1f0c0af3b94f098c569dcfda98569b
});
