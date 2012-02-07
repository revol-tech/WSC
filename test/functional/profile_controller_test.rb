require 'test_helper'

class ProfileControllerTest < ActionController::TestCase
  test "should get pushpa" do
    get :pushpa
    assert_response :success
  end

  test "should get anadashobha" do
    get :anadashobha
    assert_response :success
  end

  test "should get menkumari" do
    get :menkumari
    assert_response :success
  end

  test "should get satyamalla" do
    get :satyamalla
    assert_response :success
  end

  test "should get prami" do
    get :prami
    assert_response :success
  end

  test "should get jaleswori" do
    get :jaleswori
    assert_response :success
  end

  test "should get nilima" do
    get :nilima
    assert_response :success
  end

end
