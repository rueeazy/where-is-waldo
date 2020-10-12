class Api::V1::CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters
    end

    def show
        if character
            render json: character
        else
            render json: character.errors
        end
    end

    private

    def character
        @character ||= Character.find(params[:id])
    end
end
