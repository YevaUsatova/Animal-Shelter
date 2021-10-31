class AnimalsController < ApplicationController
    get "/animals" do 
        Animal.all.to_json
    end
end