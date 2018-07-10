# == Schema Information
#
# Table name: articles
#
#  id          :integer          not null, primary key
#  author      :string           not null
#  title       :string           not null
#  body        :text             not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
