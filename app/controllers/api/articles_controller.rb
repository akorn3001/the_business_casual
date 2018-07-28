class Api::ArticlesController < ApplicationController
  # before_action :authenticate_user!, except: [ :index, :show ]

  def index
    if params[:category_id]
      @articles = Category.find_by(id: params[:category_id]).articles
    else
      @articles = Article.all
    end
    # render "api/articles/index"
    render :index
  end

  def show
    find_article
    # render "api/articles/show.html.erb"
    render :show
  end

  def update
    find_article

    if @article.update_attributes(article_params)
      redirect_to article_url(@article)
    else
      render "api/articles/edit"
    end
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to article_url(@article)
    else
      render "api/articles/new"
    end
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
    find_article
    if @article
      Article.destroy(@article.id)
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  private
  def article_params
    params.require(:article).permit(:author, :title, :body, :category_id)
  end

  def find_article
    @article = Article.find_by(id: params[:id])
  end
end
