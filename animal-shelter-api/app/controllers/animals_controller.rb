class AnimalsController < ApplicationController
    get "/animals" do 
        Animal.all.to_json
    end

    post "./animal" do
        animals = Animal.find_or_create_by(name: params[:name], species: params[:species], age: params[:age])
    end

    
end