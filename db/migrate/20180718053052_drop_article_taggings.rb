class DropArticleTaggings < ActiveRecord::Migration[5.2]
  def change
    drop_table :article_taggings
  end
end
