json.article Article.find_by(id: @article_tag.article_id).title
json.categories Category.find_by(id: @article_tag.category_id).name
