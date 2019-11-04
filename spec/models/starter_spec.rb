require 'rails_helper'

RSpec.describe Starter, type: :model do
  subject do
    build(:starter)
  end

  describe 'when saving' do
    context 'with valid attributes' do
      it 'saves successfully' do
        expect(subject).to be_valid
      end
    end

    context 'with invalid attributes' do
      it 'fails when the name is not unique' do
        recipe = create(:starter, name: "same")
        subject.name = "same"
        expect(subject).to_not be_valid
      end
    end
  end

  describe 'when observing relationships' do
    context 'with notifications' do
      it 'can have a notification' do
        notification = create(:notification, starter: subject)

        expect(subject.notifications.length).to eq(1)
      end
    end
  end


end
