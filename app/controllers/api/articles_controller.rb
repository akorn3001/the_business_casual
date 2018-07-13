class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render "api/articles/index"
  end

  def show
    find_article
    render "api/articles/show"
  end

  def update
    # @article = Article.find_by(id: params[:id])
    #
    # if @article.update_attributes(article_params)
    #   redirect_to article_url(@article)
    # else
    #   render "api/articles/edit"
    # end
  end

  def create
    # @article = Article.new(article_params)
    #
    # if @article.save
    #   redirect_to article_url(@article)
    # else
    #   render "api/articles/new"
    # end
  end

  def edit
    find_article
    render "api/articles/edit"
  end

  def new
    @article = Article.new
    render "api/articles/new"
  end

  def destroy
  end

  private
  def article_params
    params.require(:article).permit(:author, :title, :body, :category_id)
  end

  def find_article
    @article = Article.find_by(id: params[:id])
  end
end
