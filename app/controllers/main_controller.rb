class MainController < ApplicationController
  def index
    @activities = Activity.order("created_at").page(params[:page]).per(2)


    @news_and_events = NewsAndEvent.order("created_at").page(params[:page]).per(2)


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
