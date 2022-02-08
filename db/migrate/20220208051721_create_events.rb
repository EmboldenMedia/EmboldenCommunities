class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :name
      t.text :description
      t.datetime :event_date
      t.integer :total_spots_remaining
      t.float :cost

      t.timestamps
    end
  end
end
