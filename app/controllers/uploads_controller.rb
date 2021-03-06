class UploadsController < ApplicationController
  def new
    @upload = Upload.new
  end

  def create
    @upload = Upload.new(upload_params)
    if @upload.save
      redirect_to upload_path(@upload)
    else
      render :new
    end
  end

  def show
    @upload = Upload.find(params[:id])
  end

  def index
  end

  private

  def upload_params
    params.require(:upload).permit(:photo)
  end
end
