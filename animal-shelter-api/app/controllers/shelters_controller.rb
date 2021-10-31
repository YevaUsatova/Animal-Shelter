class SheltersController < ApplicationController
    get "/shelters" do 
        Shelter.all.to_json
    end
    get "/shelters/:id" do
        Shelter.find(params[:id]).to_json
    end
end
