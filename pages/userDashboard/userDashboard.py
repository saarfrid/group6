from flask import Blueprint, render_template

# home blueprint definition
UserDashboard = Blueprint(
    'UserDashboard',
    __name__,
    static_folder='static',
    static_url_path='/UserDashboard',
    template_folder='templates'
)

# Routes
@UserDashboard.route('/UserDashboard')
def UserDashboard_index():
    return render_template('UserDashboard.html')