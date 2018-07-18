class AddIndexToArticleTags < ActiveRecord::Migration[5.2]
  def change
    add_index :article_tags, [:article_id, :category_id], unique: true
  end
end
