class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.datetime :event_date, null: false
      t.integer :total_spots_remaining
      t.float :cost

      t.timestamps
    end
  end
end
