class AddCartoVariants < ActiveRecord::Migration[7.0]
  def change
    add_belongs_to :variants, :car
  end
end
