ActiveRecord::Schema.define(version: 20151201201102) do

  create_table "contacts", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "phone_numbers", force: :cascade do |t|
    t.integer  "contact_id"
    t.string   "type"
    t.string   "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
