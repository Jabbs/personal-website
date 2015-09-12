Rails.application.routes.draw do
  
  resources :locations

  resources :contact_requests

  root 'static_pages#about'

  match '/contact', to: "static_pages#contact", via: :get
  match '/services', to: "static_pages#services", via: :get
  match '/portfolio', to: "static_pages#portfolio", via: :get

end
