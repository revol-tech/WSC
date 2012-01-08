class BannersController < ApplicationController
  def new
  end

  def create
    @banner = Banner.new(params[:banner])
    @banner.save!
  end

  def destroy
  end

end
