Rails.application.routes.draw do
  devise_for :users
  
  root "home#index"

  resources :events do
    post "/upload" => "events#upload_event_images"
  end
end
