class Api::CategoriesController < ApplicationController
  def index
    if params[:article_id]
      @categories = Article.find_by(id: params[:article_id]).categories
    else
      @categories = Category.all
    end

    render :index
  end

  def show
    @category = Category.find_by(id: params[:id])
    render :show
  end

  def create

  end

  def destroy

  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
