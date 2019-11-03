class CreateStartersNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :starters_notifications, id: false do |t|
      t.belongs_to :starter, index: true
      t.belongs_to :notification, index: true
    end
  end
end