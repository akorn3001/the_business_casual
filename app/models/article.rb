# == Schema Information
#
# Table name: articles
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text             not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Article < ApplicationRecord

  has_one_attached :photo

  validates :title, :body, :category_id, presence: true

  has_many :article_tags,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'ArticleTag'

  has_many :categories,
    through: :article_tags,
    source: :category
end
