Rails.application.routes.draw do
  resources :patients
  get '/patients/search', to: "patients#search"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
