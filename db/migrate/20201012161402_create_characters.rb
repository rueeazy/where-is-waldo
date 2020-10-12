class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.boolean :found
      t.integer :xCoor
      t.integer :yCoor

      t.timestamps
    end
  end
end
