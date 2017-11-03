class ManufacturersController < ApplicationController
  def index
    @manufacturers = Manufacturer.order('name ASC')
  end
end
