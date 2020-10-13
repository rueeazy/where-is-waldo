class Api::V1::PlayersController < ApplicationController
    def create
        player = Player.create!(player_params)
        if player
            render json: player
        else
            render json: player.errors
        end
    end

    private

    def player_params
        params.permit(:name, :time)
    end
end
