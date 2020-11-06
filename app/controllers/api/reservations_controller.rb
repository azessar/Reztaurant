class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.all
        render :index
    end

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
        render :show
    end

    def destroy
        reservation = Reservation.find_by(id: params[:id])
        reservation.destroy
    end

    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :party_size, :date, :time)
    end


end