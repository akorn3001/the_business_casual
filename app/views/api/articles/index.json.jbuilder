# json.array! @articles do |article|
#   json.extract! article, :id, :title, :body
#   json.image_url url_for(article.image)
# end

@articles.each do |article|
  json.set! article.id do
    json.extract! article, :id, :title, :body
    json.image_url url_for(article.image)
  end
end
