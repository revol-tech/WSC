class CreateNewsAndEvents < ActiveRecord::Migration
  def change
    create_table :news_and_events do |t|
      t.string :headline
      t.string :text
      t.string :image_path

      t.timestamps
    end
  end
end
