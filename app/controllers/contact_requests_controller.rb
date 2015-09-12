class ContactRequestsController < ApplicationController
  
  def create
    raise ActionController::RoutingError.new('Not Found') if !params[:blank].blank? # Spam catcher
    @contact_request = ContactRequest.new(contact_request_params)
    if @contact_request.save
      UserMailer.contact_request_email(@contact_request).deliver
      redirect_to root_path, notice: "Your message has been sent."
    else
      redirect_to root_path, alert: "There was an issue sending your message."
    end
  end
  
  private
  
    def contact_request_params
      params.require(:contact_request).permit(:email, :name, :message)
    end
end
