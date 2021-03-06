# == Schema Information
#
# Table name: articles
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Article < ApplicationRecord
  has_one_attached :image

  include PgSearch
  pg_search_scope :search, against: [:title, :body]

  validates :title, :body, presence: true
  # validates :title, uniqueness: true

  has_many :article_tags, dependent: :destroy,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: 'ArticleTag'

  has_many :categories,
    through: :article_tags,
    source: :category

  def self.perform_search(query)
    if query.present?
      then Article.search(query)
    else
      Article.all
    end.sorted
  end
end
