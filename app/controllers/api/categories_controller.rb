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
    @category = Category.new(category_params)
    if @category.save
      render 'api/categories/show'
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def destroy
    find_category
    if @category
      Category.destroy(@category.id)
      render 'api/categories/show'
    else
      render json: @category.errors.full_messages, status: 422
    end
  end


  private
  def category_params
    params.require(:category).permit(:name)
  end

  def find_category
    @category = Category.find_by(id: params[:id])
  end
end
