class Api::SearchController < ApplicationController

  def index
    if params[:query]
      @articles = Article.search(params[:query])
    else
      @rarticles = Article.all
    end
    
    render json: @articles
  end
end

# class Api::SearchController < ApplicationController
#   def index
#     @results = PgSearch.multisearch(params[:query])
#     render json: @results
#   end
# end
