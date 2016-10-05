Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/answer' => 'magic#answer'

  get '/secret' => 'secret#form'
  get '/secret/answer' => 'secret#answer'

    get '/rps' => 'rps#form'
  get '/rps/answer' => 'rps#answer'
end
