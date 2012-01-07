class CreateBanners < ActiveRecord::Migration
  def change
    create_table :banners do |t|
      t.string :image_path
      t.string :caption

      t.timestamps
    end
  end
end
