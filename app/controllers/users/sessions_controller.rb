# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end
  def create
    errors = {}
    @user = User.find_for_database_authentication(username: params[:user][:username])

    if @user && @user.valid_password?(params[:user][:password])
      sign_in(@user)
      render 'api/users/show'
    else
      if User.find_by(username: params[:user][:username]) == nil
        errors[:username] = ['Not a Valid Username']
      end

      errors[:password] = ['Not a Valid Password']
      render json: errors, status: 401
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end
  def destroy
    if current_user
      render json: current_user
      sign_out(current_user)
    else
      render json: ['No User is Currently Logged In'], status: 404
    end
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
