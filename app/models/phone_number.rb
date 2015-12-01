class PhoneNumber < ActiveRecord::Base
  
  belongs_to :contact

  validates :number, :phone_number => {
    :ten_digits => true, 
    :seven_digits => true, 
    :allow_blank => true, 
    :message => "Phone number must be either seven or ten digits in length, or blank."
  }

end