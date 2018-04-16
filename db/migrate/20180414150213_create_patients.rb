class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :firstname
      t.string :lastname
      t.integer :age
      t.string :dob
      t.integer :gender
      t.string :phone
      t.text :free_text

      t.timestamps
    end
  end
end
