class V1::StartersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @starters = Starter.all
    render json: {
      starters: @starters
    }.to_json
  end

  def show
    @starter = Starter.find(params[:id])
    render json: {
      starters: @starter
  }.to_json
  end

  def create
    @starter = Starter.new(post_params)
    if @starter.save
      redirect_to v1_starters_url
    else
      head(:unprocessable_entity)
    end
  end

  # on front end, remember to show the error with an alert
  def destroy
    starter = Starter.where(id: params[:id]).first
    if starter.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private

  def post_params
    params.require(:starter).permit(:name, :feeding_time, :description)
  end

end