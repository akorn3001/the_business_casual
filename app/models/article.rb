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

  
end
