class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_google_maps_key

  def set_google_maps_key
    @google_maps_key = "AIzaSyDtB2EUXSb38_3HcXeNZtfyi-7gFd2Kpk0"
  end
end
