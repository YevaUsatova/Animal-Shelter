class AnimalsController < ApplicationController
    get "/animals" do 
        Animal.all.to_json
    end

    post "./animal" do
        Animal.create
    end

    
end