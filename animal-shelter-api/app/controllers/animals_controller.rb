class AnimalsController < ApplicationController
    get "/animals" do 
        Animal.all.to_json
    end

    post "/animals" do
        animals = Animal.find_or_create_by(name: params[:name], species: params[:species], age: params[:age])
        animals.to_json
    end

    get "/animals/:id" do 
        animals = Animal.find(params[:id])
        animals.to_json(:include => :shelter, :except => :shelter_id)
    end

    delete "/animals/:id" do 
        animals = Animal.find(params[:id])
        animals.delete

    end 
    
end