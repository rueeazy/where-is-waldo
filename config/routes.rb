Rails.application.routes.draw do
  root to: 'homepage#index'
  
  namespace :api do
    namespace :v1 do 
      get 'characters/index'
      get 'characters/show/:id', to: 'characters#show'
      put 'characters/update/:id', to: 'characters#put'
      post 'players/create'
    end
  end
end
