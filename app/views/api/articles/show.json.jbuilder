# json.photo @article.photo
json.extract! @article, :id, :title, :body, :categories
json.image_url url_for(@article.image)
