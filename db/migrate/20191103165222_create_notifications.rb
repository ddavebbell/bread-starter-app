class CreateNotifications < ActiveRecord::Migration[5.2]
  def up
    create_table :notifications do |t|
      t.belongs_to :starter
      t.text :kind
      t.text :flag
      t.time :time_logged

      t.timestamps
    end
  end

  def down
    drop_table :notifications
  end
end
