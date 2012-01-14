class MainController < ApplicationController
  def index
    @activities = Activity.order("created_at").page(params[:page]).per(2)

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
