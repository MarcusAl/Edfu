class CoursesController < ApplicationController
  before_action :set_course, only: %i[show edit update destroy]

  # GET /courses or /courses.json
  def index
    if params[:title]
      @courses = Course.where('title ILIKE ?', "%#{params[:title]}%") # case-insensitive
    else
      # @courses = Course.all
      @q = Course.ransack(params[:q])
      @courses = @q.result.includes(:user)
    end
  end

  # GET /courses/1 or /courses/1.json
  def show
    @q = Course.ransack(params[:q])
  end

  # GET /courses/new
  def new
    @q = Course.ransack(params[:q])
    @course = Course.new
  end

  # GET /courses/1/edit
  def edit
    @q = Course.ransack(params[:q])
  end

  # POST /courses or /courses.json
  def create
    @q = Course.ransack(params[:q])
    @course = Course.new(course_params)
    @course.user = current_user

    respond_to do |format|
      if @course.save
        format.html { redirect_to @course, notice: 'Course was successfully created.' }
        format.json { render :show, status: :created, location: @course }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /courses/1 or /courses/1.json
  def update
    @q = Course.ransack(params[:q])
    respond_to do |format|
      if @course.update(course_params)
        format.html { redirect_to @course, notice: 'Course was successfully updated.' }
        format.json { render :show, status: :ok, location: @course }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @course.errors, status: :unprocessable_entity }
      end
    end
  end

  # Delete a course
  def destroy
    @q = Course.ransack(params[:q])
    @course.destroy
    respond_to do |format|
      format.html { redirect_to courses_url, notice: 'Course was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_course
    @course = Course.friendly.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def course_params
    params.require(:course).permit(:title, :description, :short_description, :price, :language, :level)
  end
end
