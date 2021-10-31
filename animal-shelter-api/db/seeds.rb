Shelter.destroy_all
Animal.destroy_all

shelter1= Shelter.create(name: "Animal Fate", location: "Texas")
shelter2= Shelter.create(name: "Animals Live", location: "New York")
shelter3= Shelter.create(name: "Animal cruelty-free existance",location: "Washington")

animal1= Animal.create(name: "Chucky", species: "Dog", age: "2", shelter_id: shelter1.id)
animal2= Animal.create(name: "Fluff", species: "Cat", age: "10", shelter_id: shelter1.id)
animal3= Animal.create(name: "Buddy", species: "Eagle", age: "5", shelter_id: shelter2.id)
animal4= Animal.create(name: "Barny", species: "Owl", age: "7", shelter_id: shelter2.id)
animal5= Animal.create(name: "Tooth-Brash", species: "Shark", age: "1", shelter_id: shelter3.id)
animal6= Animal.create(name: "Legins", species: "Octopus", age: "9", shelter_id: shelter3.id)

puts "Animal seeded"