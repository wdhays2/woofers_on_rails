class Manufacturer < ApplicationRecord
  has_many :drivers

  validates :name, presence: { message: 'Enter name' }
end
