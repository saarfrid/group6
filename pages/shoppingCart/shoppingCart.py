from flask import Blueprint, render_template

# home blueprint definition
ShoppingCart = Blueprint(
    'ShoppingCart',
    __name__,
    static_folder='static',
    static_url_path='/ShoppingCart',
    template_folder='templates'
)

# Routes
@ShoppingCart.route('/ShoppingCart')
def ShoppingCart_index():
    return render_template('ShoppingCart.html')