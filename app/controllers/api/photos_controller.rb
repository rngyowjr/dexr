class Api::PhotosController < ApplicationController
    before_action :require_login

    def index
        @photos = Photo.all
    end

    def create
        @photo = Photo.new(photo_params)

        if @photo.save
            render "api/photos/show"
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end 

    def destroy
        photo = current_user.photos.find_by(id: params[:id])
        if photo
            photo.destroy
        else
            render json: ["You can't delete photos that aren't yours!"], status: 401
        end

    end

    private

    def photo_params
        params.require(:photo).permit(:title, :img_url, :author_id)
    end
end
