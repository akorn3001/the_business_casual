
json.extract! @article, :id, :title, :body, :image, :published
json.imageURL @article.image.attached? ? url_for(@article.image) : nil
