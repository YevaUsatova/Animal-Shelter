require './config/environment'
use Rack::JSONBodyParser

use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
  end
end

run ApplicationController
use SheltersController
use AnimalsController


