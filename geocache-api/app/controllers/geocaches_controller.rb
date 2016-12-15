class GeocachesController < ApplicationController
  def index
    @geocaches =  Geocache.all
    render json: @geocaches
  end

  def show
    @geocache =  Geocache.find(params[:id])
    render json: @geocache
  end

  def update
    @geocache = Geocache.find(params[:id])
    if @geocache.update(geocache_params)
      render json: @geocache
    else
      render json: @geocache.errors, status: :unprocessable_entity
    end
  end

  def create
    @geocache =  Geocache.new(geocache_params)
    if @geocache.save
      render json: @geocache
    else
      render json: @geocache.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @geocache =  Geocache.find(params[:id])
    @geocache.destroy
    @geocaches =  Geocache.all
    render json: @geocaches
  end

  private

  def geocache_params
    params.require(:geocache).permit(:item, :long, :lat)
  end
end
