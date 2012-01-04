require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get about_us" do
    get :about_us
    assert_response :success
  end

  test "should get services" do
    get :services
    assert_response :success
  end

  test "should get activities" do
    get :activities
    assert_response :success
  end

  test "should get achievements" do
    get :achievements
    assert_response :success
  end

  test "should get Our_organization" do
    get :Our_organization
    assert_response :success
  end

  test "should get jobs" do
    get :jobs
    assert_response :success
  end

  test "should get branch" do
    get :branch
    assert_response :success
  end

  test "should get news_event" do
    get :news_event
    assert_response :success
  end

end
