Rails.application.routes.draw do
  
  resources :contact_requests

  root 'static_pages#home'

end
