# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



["hello|/uploads/images/IMG_0291.JPG","hello2|/uploads/images/IMG_0291.JPG"].each do |t|
    headline, image_path = t.chomp.split("|")
    Activity.create!(:headline => headline, :image_path => image_path)
  end

["banner1|/uploads/images/IMG_0291.JPG","banner2|/uploads/images/IMG_0291.JPG"].each do |t|
    caption, image_path = t.chomp.split("|")
    Banner.create!(:caption => caption, :image_path => image_path)
  end

["hello|/uploads/images/IMG_0291.JPG","hello2|/uploads/images/IMG_0291.JPG"].each do |t|
    headline, image_path = t.chomp.split("|")
    NewsAndEvent.create!(:headline => headline, :image_path => image_path)
  end
