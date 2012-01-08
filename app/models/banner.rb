class Banner < ActiveRecord::Base
attr_accessible :image_path,:caption,:image
mount_uploader :images, ImageUploader
end
