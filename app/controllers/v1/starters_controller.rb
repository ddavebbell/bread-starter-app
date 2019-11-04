class V1::StartersController < ApplicationController
  def index
    starters = Starter.all
    render json: {
      starters: starters
    }.to_json
  end
end