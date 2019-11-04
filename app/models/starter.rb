class Starter < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  has_many :notifications
end
