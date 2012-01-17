class MainController < ApplicationController
  def index
    @activities = Activity.order("created_at").page(params[:pagina_activities]).per(2)
		@news_and_events = NewsAndEvent.order("created_at").page(params[:pagina_news]).per(2)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def new
  end

  def destroy
  end

  def update
  end

  def create
  end


end
