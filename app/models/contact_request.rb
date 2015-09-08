class ContactRequest < ActiveRecord::Base
  
  # validations
  validates :name, presence: true, length: { maximum: 100 }
  validates :message, presence: true
  validates :email, presence: true
  validates_format_of :email, :with => /@/
end
