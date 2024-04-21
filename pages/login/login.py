from flask import Blueprint, render_template

# home blueprint definition
Login = Blueprint(
    'Login',
    __name__,
    static_folder='static',
    static_url_path='/Login',
    template_folder='templates'
)

# Routes
@Login.route('/Login')
def Login_index():
    return render_template('Login.html')