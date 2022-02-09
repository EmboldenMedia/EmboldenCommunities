class EventsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:upload_event_images]
  
  def index
  end

  def new
    @new_event = Event.new
  end

  def create
    new_event = Event.create(
      user_id: current_user.id,
      name: params[:name],
      description: params[:description],
      event_date: params[:event_date],
      total_spots_remaining: params[:total_spots_remaining],
      cost: params[:cost]
    )

    render :json => new_event, status: 201
  end

  def upload_event_images
    event = Event.find(params[:event_id])

    event.update(event_images: params[:event_images])

    head 200
  end
end
