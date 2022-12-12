class CarsController < ApplicationController
  def index
    @cars = Car.all.includes(:variants)
  end

  def edit
    @car = Car.find(params[:id])
    @blank_variant = @car.variants.build
  end

  def show
    @car = Car.find(params[:id])
    @blank_variant = @car.variants.build
  end

  def update
    @car = Car.find(params[:id])
    respond_to do |format|
      if @car.update(car_params)
        format.html { redirect_to edit_car_url(@car) }
      else
        format.html { render :show, status: :unprocessable_entity }
      end
    end
  end

  private

  def car_params
    params.require(:car).permit(:id, :model, :make, variants_attributes: [:name])
  end
end
