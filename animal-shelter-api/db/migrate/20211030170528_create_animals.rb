class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :species
      t.integer :age
      t.integer :shelter_id
    end
  end
end
