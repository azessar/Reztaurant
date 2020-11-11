class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    

    private

    def review_params
        params.require(:review).permit(:user_id, :restaurant_id, :body, :rating)
    end

end