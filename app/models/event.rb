class Event < ApplicationRecord
  has_many_attached :event_images do |attachable|
    attachable.variant :thumb, resize_to_limit: [100, 100]
    attachable.variant :medium, resize_to_limit: [400, 400]
  end
  belongs_to :user
end
