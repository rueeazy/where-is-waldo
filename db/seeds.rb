character_attributes = [
    {name: "Waldo", found: false, xCoor: 865, yCoor: 330},
    {name: "Odlaw", found: false, xCoor: 150, yCoor: 315},
    {name: "Whitebeard", found: false, xCoor: 380, yCoor: 310},
    {name: "Wenda", found: false, xCoor: 1080, yCoor: 355}
]

character_attributes.each do |attributes|
    Character.create(attributes)
end


