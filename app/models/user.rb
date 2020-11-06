class User < ApplicationRecord

    validates :password_digest, :session_token, presence: true
    validates :email, presence: true
    validates :primary_dining_location, presence: true #dropdown to make sure it's a preselected city???
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :first_name, :last_name, presence: true

    has_many :reservations,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Reservation

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user: nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end
end