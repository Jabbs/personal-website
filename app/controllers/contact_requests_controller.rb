class ContactRequestsController < ApplicationController

  def create
    raise ActionController::RoutingError.new('Not Found') if !params[:blank].blank? # Spam catcher
    @contact_request = ContactRequest.new(contact_request_params)
    @contact_request.save
    UserMailer.contact_request_email(@contact_request).deliver
  end

  private

    def contact_request_params
      params.require(:contact_request).permit(:email, :name, :message)
    end
end
