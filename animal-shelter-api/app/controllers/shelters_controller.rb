class SheltersController < ApplicationController
    get "/shelters" do 
        Shelter.all.to_json
    end
end
