class Api::ArticleTagsController < ApplicationController
  def index
    @article_tags = ArticleTag.all
    render :index
  end

  def show
    find_article_tag
    render :show
  end

  def create

  end

  def new

  end

  def edit

  end

  private

  def article_tag_params
    params.require(:article_tags).permit(:article_id, :category_id)
  end

  def find_article_tag
    @article_tag = ArticleTag.find_by(id: params[:id])
  end
end
