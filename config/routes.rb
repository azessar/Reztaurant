Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:index, :show]
    resources :reservations, only: [:create, :index, :show, :destroy]
    resources :reviews, only: [:create, :index, :show, :destroy]
  end

  root "static_pages#root" 
end
