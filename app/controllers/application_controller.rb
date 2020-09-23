class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def signin!(user)
        session[:session_token] = user.reset_session_token!
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signout!
        current_user.reset_session_token!
        @current_user = nil
        session[:session_token] = nil
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end

end
