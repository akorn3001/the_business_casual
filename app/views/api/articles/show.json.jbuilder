
json.extract! @article, :id, :title, :body
json.image_url url_for(@article.image)
