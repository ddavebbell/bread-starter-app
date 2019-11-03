class CreateStarters < ActiveRecord::Migration[5.2]
  def up
    create_table :starters do |t|
      t.string :name
      t.text :description
      t.string :phase
      t.time :feeding_time

      t.timestamps
    end
  end

  def down
    drop_table :starters
  end
end
