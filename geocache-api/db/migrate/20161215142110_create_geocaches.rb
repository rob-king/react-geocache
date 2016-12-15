class CreateGeocaches < ActiveRecord::Migration[5.0]
  def change
    create_table :geocaches do |t|
      t.string :item
      t.string :lat
      t.string :long

      t.timestamps
    end
  end
end
