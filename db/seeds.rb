# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all

10.times do |index|
  Category.create!(name: Faker::Food.fruits)
end

######################################

Article.destroy_all

20.times do |index|
  Article.create!(
    title: Faker::Book.title,
    body: Faker::Lorem.paragraph
  )
end

Article.all.each_with_index do |article, idx|
  article.image.attach(io: File.open("/Users/akorn/Desktop/test_pictures/#{idx + 1}.jpg"), filename: "#{idx + 1}.jpg")
end

######################################
