class EventsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: [:upload_event_images]
  
  def index
    if params[:past]
      @events = Event.where("event_date < ?", [Time.parse(params[:time_now])])
    else
      @events = Event.all.order(event_date: :desc)
    end
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

    event.event_images.attach(params[:event_image])

    head 200
  end
end
