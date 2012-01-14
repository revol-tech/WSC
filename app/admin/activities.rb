ActiveAdmin.register Activity do

  controller do
      # This code is evaluated within the controller class


      def new
        @activity = Activity.new()
        # Instance method
      end

      def create
        uploader = ImageUploader.new
        uploader.store!(params[:activity][:image_file])
        @activity = Activity.new()
        @activity.headline = params[:activity][:headline]
        @activity.text = params[:activity][:text]
        @activity.image_path = uploader.to_s
        @activity.save!
        redirect_to admin_activities_path, :notice => "Activity added successfully!"
      end
  end

  form(:html => { :multipart => true }) do |f|
    f.inputs "Activity" do
      f.input :image_file, :as => :file
      f.input :headline
      f.input :text
    end
    f.buttons
    end

end
