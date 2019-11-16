class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_new_contact_request_variable

  def set_new_contact_request_variable
    @contact_request = ContactRequest.new
  end
end
