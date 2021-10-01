class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable, :confirmable
  rolify

  has_many :courses, dependent: :delete_all
  has_many :enrollments
  # When class is called its response is the email of the User

  extend FriendlyId
  friendly_id :email, use: :slugged

  def to_s
    email
  end

  def username
    email.split(/@/).first
  end

  after_create :assign_default_role

  # User is assigned both teacher and student roles if they are a new user
  def assign_default_role
    if User.count == 1
      add_role(:admin) if roles.blank?
      add_role(:teacher)
      add_role(:student)
    else
      add_role(:student) if roles.blank?
      add_role(:teacher) # if you want any user to be able to create own courses
    end
  end

  validate :must_have_a_role, on: :update

  def online?
    updated_at > 2.minutes.ago
  end

  private

  def must_have_a_role
    errors.add(:roles, 'must have at least one role') unless roles.any?
  end
end
