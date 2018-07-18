# == Schema Information
#
# Table name: article_tags
#
#  id          :integer          not null, primary key
#  article_id  :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ArticleTag < ApplicationRecord

  belongs_to :article,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'Article'

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: 'Category'
    
end
