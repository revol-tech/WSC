class AddTextToActivity < ActiveRecord::Migration
  def change
    add_column :activities, :text, :text
  end
end
