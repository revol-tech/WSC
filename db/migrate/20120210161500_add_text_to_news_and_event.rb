class AddTextToNewsAndEvent < ActiveRecord::Migration
  def change
    add_column :news_and_events, :text, :text
  end
end
