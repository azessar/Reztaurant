class Api::RestaurantsController < ApplicationController

    # def index

    #     @restaurants = Restaurant.all
    #     render :index
    # end

    def index
        if params[:searchTerms]
            @restaurants = Restaurant.name_like(params[:searchTerms])
            if  @restaurants
                return @restaurants
            else
                render json: ["No restaurants match that search"], status: 404
            end
        else
            @restaurants = Restaurant.all
        end
        render :index
    end


    def show 
        @restaurant = Restaurant.find_by(id: params[:id])
        render :show
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :avg_price, :cuisine, :description, :capacity, :latitude, :longitude, :open_time, :close_time, :address, :city, :state, :zip, :phone)
    end

end