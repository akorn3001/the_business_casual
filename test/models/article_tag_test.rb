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

require 'test_helper'

class ArticleTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
