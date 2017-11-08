Rails.application.routes.draw do
  root 'manufacturers#index'
  get 'manufacturers/index'
  get 'drivers/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
