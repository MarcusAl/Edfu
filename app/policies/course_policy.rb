class CoursePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def edit?
    @user&.has_role?(:admin || @record.user == @user)
  end

  def update?
    # &. safeguards against nil returns
    # if @user is true and @user.has_role? is true
    @user&.has_role?(:admin || @record.user == @user)
  end

  def new?
    @user&.has_role?(:admin || :teacher)
  end

  def create?
    @user&.has_role?(:admin || :teacher)
  end

  def destroy?
    @user&.has_role?(:admin || @record.user == @user)
  end
end
