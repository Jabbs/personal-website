Rails.application.routes.draw do
  
  resources :locations

  resources :contact_requests

  root 'static_pages#home'

end
