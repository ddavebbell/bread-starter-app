FactoryBot.define do

  # Factories

  factory :starter do 
    name { generate(:starter_name)}
  end

  factory :notification do
    kind { 'stir' }
  end

  factory :starters_notifications do
    starter
    notification
  end

  # Sequences

  sequence :starter_name do |n|
    "Namey Numberson No. #{n}"
  end

end