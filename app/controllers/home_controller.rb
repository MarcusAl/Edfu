class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @courses = Course.all.limit(9)
    @latest_courses = Course.all.limit(9).order(created_at: :desc)
    @q = Course.ransack(params[:q])
  end

  def activity
    @activities = PublicActivity::Activity.all
    @q = Course.ransack(params[:q])
  end
end
