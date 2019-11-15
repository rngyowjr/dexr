class Photo < ApplicationRecord
    validates :title, :img_url, presence: true 
    validate :title_too_long
    
    belongs_to :author, 
        foreign_key: :author_id, 
        class_name: :User

    def title_too_long 
        if title && title.length > 50 
            errors[:title] << "title must use less than 50 characters"
        end
    end
    
end
