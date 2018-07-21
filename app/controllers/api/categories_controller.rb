class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
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
