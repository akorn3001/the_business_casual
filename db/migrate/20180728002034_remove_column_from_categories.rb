class RemoveColumnFromCategories < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :parent_category_id
  end
end
