class StaticPagesController < ApplicationController
  
  def home
    @contact_request = ContactRequest.new
  end
end
