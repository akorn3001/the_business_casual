class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :author, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.integer :category_id, null: false

      t.timestamps
    end
  end
end
