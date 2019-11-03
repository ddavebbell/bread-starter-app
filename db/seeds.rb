# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
first_starter = Starter.create(name: 'Starty McStarterson', description: 'Starty\'s description', phase: 'First Phase', feeding_time: Time.parse("8:00"))

second_starter = Starter.create(name: 'Olive Starter', description: 'Olive\'s description', phase: 'First Phase', feeding_time: Time.parse("9:00"))

third_starter = Starter.create(name: 'Raisin Starter', description: 'Raisin\'s description', phase: 'First Phase', feeding_time: Time.parse("10:00"))

notification = Notification.create(starter: first_starter, kind: 'Stir')
second_notification  = Notification.create(starter: second_starter,kind: 'Stir')