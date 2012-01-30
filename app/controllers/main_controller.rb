class MainController < ApplicationController
  def index
    @banners = Banner.all
    @news_and_events = NewsAndEvent.order("created_at").page(params[:page]).per(3)
    @activities = Activity.order("created_at").page(params[:page]).per(2)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def news_paginator
     @news_and_events = NewsAndEvent.order("created_at").page(params[:page]).per(3)
     respond_to do |format|
      format.js
    end
  end

  def activities_paginator
    @activities = Activity.order("created_at").page(params[:page]).per(2)
    respond_to do |format|
      format.js
    end
  end

end
