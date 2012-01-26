class NewsActivitiesController < ApplicationController
  def news_detail
    @news_detail = NewsAndEvent.all
  end

  def activities_detail
    @activities_detail = Activity.all
  end

end
