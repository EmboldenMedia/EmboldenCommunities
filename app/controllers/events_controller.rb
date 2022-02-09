class EventsController < ApplicationController
  before_action :authenticate_user!
  
  def index
  end

  def new
    @new_event = Event.new
  end

  def create
    Event.create(
      user_id: current_user.id,
      name: params[:name],
      description: params[:description],
      event_date: params[:event_date],
      total_spots_remaining: params[:total_spots_remaining],
      cost: params[:cost],
      event_images: params[:event_images]
    )
  end
end
