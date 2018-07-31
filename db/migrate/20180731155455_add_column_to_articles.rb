class AddColumnToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :published, :integer, default: false
  end
end
