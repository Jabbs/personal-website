Rails.application.routes.draw do

  resources :locations

  resources :contact_requests

  root 'static_pages#about'

  match '/contact', to: "static_pages#contact", via: :get
  match '/services', to: "static_pages#services", via: :get
  match '/portfolio', to: "static_pages#portfolio", via: :get
  match '/blog/11-10-2019/postgres-upgrade/9.4/to/9.6/psql', to: "static_pages#postgres_upgrade", via: :get, as: :postgres_blog
end
