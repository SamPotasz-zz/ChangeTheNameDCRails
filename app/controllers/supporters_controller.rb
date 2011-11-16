class SupportersController < ApplicationController
  # GET /supporters
  # GET /supporters.json
  def index
    @supporters = Supporter.all
    
    #new one to add at the bottom of the list
    @supporter = Supporter.new

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @supporters }
    end
  end

  # GET /supporters/1
  # GET /supporters/1.json
  def show
    @supporter = Supporter.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @supporter }
    end
  end

  # GET /supporters/new
  # GET /supporters/new.json
  def new
    @supporter = Supporter.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @supporter }
    end
  end

  # GET /supporters/1/edit
  def edit
    @supporter = Supporter.find(params[:id])
  end

  # POST /supporters
  # POST /supporters.json
  def create
    @supporter = Supporter.new(params[:supporter])

    respond_to do |format|
      if @supporter.save
        format.html { redirect_to @supporter, notice: 'Supporter was successfully created.' }
        format.json { render json: @supporter, status: :created, location: @supporter }
      else
        format.html { render action: "new" }
        format.json { render json: @supporter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /supporters/1
  # PUT /supporters/1.json
  def update
    @supporter = Supporter.find(params[:id])

    respond_to do |format|
      if @supporter.update_attributes(params[:supporter])
        format.html { redirect_to @supporter, notice: 'Supporter was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @supporter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /supporters/1
  # DELETE /supporters/1.json
  def destroy
    @supporter = Supporter.find(params[:id])
    @supporter.destroy

    respond_to do |format|
      format.html { redirect_to Supporters_url }
      format.json { head :ok }
    end
  end
end
