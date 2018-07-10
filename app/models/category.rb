# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  CATEGORY_NAMES = %w(Cat1 Cat2 Cat3 Cat4 Cat5)

  has_many :articles

  validates :name, presence: true, inclusion: CATEGORY_NAMES
end
