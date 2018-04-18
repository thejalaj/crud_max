class Patient < ApplicationRecord
  enum gender: { Female: 0, Male: 1}
  validates_uniqueness_of :firstname, :scope => :lastname
  validates_presence_of :firstname
  validates_presence_of :lastname
  validates_length_of :phone, maximum: 10
  validates_length_of :phone, minimum: 10
end
