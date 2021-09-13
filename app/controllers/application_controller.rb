class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  include PublicActivity::StoreController # save current user using gem public_activity
end
