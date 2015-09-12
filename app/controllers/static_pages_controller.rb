class StaticPagesController < ApplicationController
  
  def about
    
  end
  
  def portfolio
    
  end
  
  def services
    
  end
  
  def contact
    @contact_request = ContactRequest.new
    @map_latitude = 41.9060000
    @map_longitude = -87.6967777
    @locations = Location.all
    @hash = Gmaps4rails.build_markers(@locations) do |location, marker|
      marker.lat location.latitude
      marker.lng location.longitude
      marker.picture({url: "//s3.amazonaws.com/petejabbour-website/map_marker.png", width: 40, height: 40})
      marker.infowindow render_to_string(:partial => "/shared/infowindow", :locals => { :location => location})
      # marker.json({ test_id: idea_location.id })
    end
  end
end
