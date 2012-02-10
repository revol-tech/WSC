class RemoveTextFromNewsAndEvent < ActiveRecord::Migration
  def up
    remove_column :news_and_events, :text
  end

  def down
    add_column :news_and_events, :text, :string
  end
end
