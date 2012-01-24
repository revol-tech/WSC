require 'test_helper'

class NewsActivitiesControllerTest < ActionController::TestCase
  test "should get news_detail" do
    get :news_detail
    assert_response :success
  end

  test "should get activities_detail" do
    get :activities_detail
    assert_response :success
  end

end
