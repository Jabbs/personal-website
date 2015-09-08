class Location < ActiveRecord::Base
  geocoded_by :full_address
  reverse_geocoded_by :latitude, :longitude do |obj,results|
    if geo = results.first
      obj.city      = geo.city
      obj.state     = geo.state
    end
  end
  
  # callbacks
  after_validation :geocode, unless: :all_blank?
  after_validation :reverse_geocode, unless: :all_blank?, if: :no_city_state?
  
  # validations
  # validates :street_1, presence: true, if: :validate_full?
  # validates :zip, presence: true, if: :address_belongs_to_petition_or_validate_full?
  # validates :city, presence: true, if: :address_belongs_to_petition_or_validate_full?
  # validates :state, presence: true, if: :address_belongs_to_petition_or_validate_full?

  def all_blank?
    ["name", "street_1", "street_2", "city", "state", "zip", "latitude", "longitude"].each do |column_name|
      return false if self.send(column_name).present?
    end
    return true
  end
  
  def no_city_state?
    self.city_state.blank? ? true : false
  end
  
  def validate_full?
    self.validate_full == true ? true : false
  end
  
  def address_belongs_to_user?
    self.locationable_type == "User" ? true : false
  end
  
  def full_address
    "#{name}, #{street_1}, #{street_2}, #{city}, #{state}, #{zip}"
  end
  
  def city_state
    if self.city.present? && self.state.present?
      "#{city.titleize}, #{state.length == 2 ? state.upcase : state.titleize}"
    else
      ""
    end
  end
  
  def incomplete?
    if city.blank? || state.blank? || zip.blank? || street_1.blank?
      true
    else
      false
    end
  end
end
