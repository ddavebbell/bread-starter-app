# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_03_165758) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "notifications", force: :cascade do |t|
    t.bigint "starter_id"
<<<<<<< HEAD
    t.string "kind"
    t.string "flag"
=======
    t.text "kind"
    t.text "flag"
>>>>>>> master
    t.time "time_logged"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["starter_id"], name: "index_notifications_on_starter_id"
  end

  create_table "starters", force: :cascade do |t|
    t.text "name"
    t.text "description"
    t.text "phase"
    t.time "feeding_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "starters_notifications", id: false, force: :cascade do |t|
    t.bigint "starter_id"
    t.bigint "notification_id"
    t.index ["notification_id"], name: "index_starters_notifications_on_notification_id"
    t.index ["starter_id"], name: "index_starters_notifications_on_starter_id"
  end

end
