class RemoveColorFromCars < ActiveRecord::Migration[7.0]
  def change
    remove_column :cars, :color
  end
end
