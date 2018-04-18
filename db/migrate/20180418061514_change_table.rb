class ChangeTable < ActiveRecord::Migration[5.2]
  def change
    add_column :patients, :dobb, :date
    remove_column :patients, :dob
  end
end
