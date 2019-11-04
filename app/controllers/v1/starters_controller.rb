class V1::StartersController < ApplicationController
  def index
    starters = Starter.all
    render json: {
      starters: starters
    }.to_json
  end
  def show
    starter = Starter.find(params[:id])
    render json: {
      starters: starter
  }.to_json
  end
end