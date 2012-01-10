class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :headline
      t.string :text
      t.string :image_path

      t.timestamps
    end
  end
end
