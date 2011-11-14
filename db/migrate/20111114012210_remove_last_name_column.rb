class RemoveLastNameColumn < ActiveRecord::Migration
  def up
    remove_column :users, :last_name
    rename_column :users, :first_name, :full_name
  end

  def down
    add_column :users, :last_name, :string
    rename_column :users, :full_name, :first_name
  end
end