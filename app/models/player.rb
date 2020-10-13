class Player < ApplicationRecord
    validates :name, presence: true
    validates :time, presence: true
end
