20.times do
  Contact.create(
    firstname:  FFaker::NameIT.first_name,
    lastname:   FFaker::NamePH.last_name,
    email:      FFaker::Internet.email
    )
end