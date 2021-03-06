# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

demo_user = User.create!(
    username: "Tim the Tester",
    password: "timtimtim"
)

Photo.destroy_all

pikachu = Photo.create!(
    title: "Pikachu",
    img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    author_id: demo_user.id
)

bulbasaur = Photo.create!(
    title: "Bulbasaur",
    img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    author_id: demo_user.id
)

charmander = Photo.create!(
    title: "Charmander",
    img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    author_id: demo_user.id
)

squirtle = Photo.create!(
    title: "Squirtle",
    img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    author_id: demo_user.id
)