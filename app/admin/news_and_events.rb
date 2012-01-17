ActiveAdmin.register NewsAndEvent do

   controller do
      # This code is evaluated within the controller class
      def new
        @news_and_event = NewsAndEvent.new()
        # Instance method
      end

       def update
        @news_and_event = NewsAndEvent.find(params[:id])
        @news_and_event.save!
        uploader = ImageUploader.new
        uploader.store!(params[:news_and_event][:image_file])
        @news_and_event.headline = params[:news_and_event][:headline]
        @news_and_event.text = params[:news_and_event][:text]
        @news_and_event.image_path = uploader.to_s
        @news_and_event.save!
        redirect_to admin_activities_path, :notice => "NewsAndEvent updated successfully!"
      end

      def create
        uploader = ImageUploader.new
        uploader.store!(params[:news_and_event][:image_file])
        @news_and_event = NewsAndEvent.new()
        @news_and_event.headline = params[:news_and_event][:headline]
        @news_and_event.text = params[:news_and_event][:text]
        @news_and_event.image_path = uploader.to_s
        @news_and_event.save!
        redirect_to admin_news_and_events_path, :notice => "NewsAndEvent added successfully!"
      end
  end

  form(:html => { :multipart => true }) do |f|
    f.inputs "NewsAndEvent" do
      f.input :image_file, :as => :file
      f.input :headline
      f.input :text
    end
    f.buttons
    end


end
