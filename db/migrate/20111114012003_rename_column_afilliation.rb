class RenameColumnAfilliation < ActiveRecord::Migration
  def up
    rename_column :users, :afillation, :affiliation
  end

  def down
    rename_column :users, :affiliation, :afillation
  end
end