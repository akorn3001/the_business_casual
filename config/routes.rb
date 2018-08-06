Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # devise_scope :user do
  #   post 'login', to: 'devise/sessions#new'
  #   delete 'logout', to: 'devise/sessions#destroy'
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    # Top level articles
    resources :articles, except: [:show]

    resources :articles, only: [:show] do
      resources :categories, only: [:index]
    end

    # Top level categories
    resources :categories, except: [:show]

    resources :categories, only: [:show] do
      resources :articles, only: [:index]
    end

    # Top level article_tags
    resources :article_tags, only: [:index, :show]
  end
end
