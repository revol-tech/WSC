ActiveAdmin.register Banner do
 controller do
      # This code is evaluated within the controller class
      def new
        @banner = Banner.new()
        # Instance method
      end

      def update
        @banner = Banner.find(params[:id])
        @banner.save!
        uploader = ImageUploader.new
        uploader.store!(params[:banner][:image_file])
        @banner.caption = params[:banner][:caption]
        @banner.image_path = uploader.to_s
        @banner.save!
        redirect_to admin_banners_path, :notice => "Banner updated successfully!"
      end

      def create
        uploader = ImageUploader.new
        uploader.store!(params[:banner][:image_file])
        @banner = Banner.new()
        @banner.caption = params[:banner][:caption]
        @banner.image_path = uploader.to_s
        @banner.save!
        redirect_to admin_banners_path, :notice => "Banner added successfully!"
      end
  end

  form(:html => { :multipart => true }) do |f|
    f.inputs "Banner" do
      f.input :image_file, :as => :file
      f.input :caption
    end
    f.buttons
    end
end
