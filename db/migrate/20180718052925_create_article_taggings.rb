class CreateArticleTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :article_taggings do |t|
        t.integer :article_id, null: false
        t.integer :category_id, null: false
        
      t.timestamps
    end
  end
end
