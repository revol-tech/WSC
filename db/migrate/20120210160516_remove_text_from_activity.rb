class RemoveTextFromActivity < ActiveRecord::Migration
  def up
    remove_column :activities, :text
  end

  def down
    add_column :activities, :text, :string
  end
end
