require 'rails_helper'

RSpec.describe Notification, type: :model do
  subject do
    build(:notification)
  end

  describe 'when saving' do
    context 'with valid attributes' do
      it 'saves successfully' do
        test_starter = create(:starter)
        subject.starter = test_starter
        expect(subject).to be_valid
      end
    end

    context 'with invalid attributes' do
      it 'fails when has no starter' do
        subject.starter = nil
        expect(subject).to_not be_valid
      end
    end
  end

end
