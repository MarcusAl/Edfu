Rails.application.routes.draw do
  resources :enrollments
  devise_for :users
  resources :courses do
    resources :lessons
  end
  resources :users, only: %i[index edit show update]
  get '/user' => 'home#index', :as => :user_root
  root 'home#index'
  get 'home/index'
  get 'home/activity'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
