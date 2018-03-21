Rails.application.routes.draw do
  get 'admin/index'
  get 'admin/update'
  put 'admin/:id' => 'admin#update'
  patch 'admin/:id' => 'admin#update'

  resources :reviews, defaults: {format: :json}
  resources :users, defaults: {format: :json}
  resources :apartments

  post 'user_token' => 'user_token#create'

  root "reviews#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
