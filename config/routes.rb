Rails.application.routes.draw do
  root to: 'uploads#new'
  resources :uploads, only: [:new, :create, :show, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
