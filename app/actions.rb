get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end

post '/contact/new' do
  results = {result: false}
  firstname = params[:firstname]
  lastname = params[:lastname]
  email = params[:email]
  contact = Contact.new firstname: firstname, lastname: lastname, email: email
  if contact.save
    results[:result] = true
    results[:contact_id] = contact.id
  end
  results.to_json
end

# TODO: make these routes
# '/contact/find/:id'
# '/contact/find/name_or_email'
# '/contact/:id/delete'
