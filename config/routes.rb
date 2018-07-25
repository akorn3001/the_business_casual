Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :articles, only: [:index, :show]

    resources :categories, except: [:show]

    resources :categories, only: [:show] do
      resources :articles, only: [:index]
    end

    resources :article_tags, only: [:index, :show]
  end
end
