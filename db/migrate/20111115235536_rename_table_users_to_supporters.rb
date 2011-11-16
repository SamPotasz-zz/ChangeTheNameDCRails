class RenameTableUsersToSupporters < ActiveRecord::Migration
  def up
    rename_table :users, :supporters
  end

  def down
    rename_table :supporters, :users
  end
end