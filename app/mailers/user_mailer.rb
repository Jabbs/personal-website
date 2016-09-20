class UserMailer < ApplicationMailer
  default from: "Pete Jabbour's Website <postmaster@petejabbour.info>"
  default content_type: "text/html"

  def contact_request_email(contact_request)
    @contact_request = contact_request
    mail(to: "Pete Jabbour <petejabbour1@gmail.com>", subject: "New Contact Request")
  end

end
