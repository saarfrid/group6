from flask import Blueprint, render_template

# home blueprint definition
ContactUs = Blueprint(
    'ContactUs',
    __name__,
    static_folder='static',
    static_url_path='/ContactUs',
    template_folder='templates'
)

# Routes
@ContactUs.route('/ContactUs')
def ContactUs_index():
    return render_template('ContactUs.html')