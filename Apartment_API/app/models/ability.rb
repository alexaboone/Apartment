class Ability
  include CanCan::Ability

  def initialize(user)
    if user.nil?
      user = User.new
    end
    if user.has_role? :admin
      can :manage, :all
    elsif user.has_role? :critic
      can :manage, Review
    elsif user.has_role? :peasant
      can :read, Review, user_id: user.id
    end
  end
end
