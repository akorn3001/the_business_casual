class RemoveColumnFromArticles < ActiveRecord::Migration[5.2]
  def change
    remove_column :articles, :published
  end
end
