class CreateMainHeadlines < ActiveRecord::Migration
  def change
    create_table :main_headlines do |t|
      t.string :title
      t.string :summary

      t.timestamps
    end
  end
end
