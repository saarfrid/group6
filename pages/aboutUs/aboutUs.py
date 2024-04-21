from flask import Blueprint, render_template

# home blueprint definition
aboutUs = Blueprint(
    'aboutUs',
    __name__,
    static_folder='static',
    static_url_path='/aboutUs',
    template_folder='templates'
)

# Routes
@aboutus.route('/aboutUs')
def aboutUs_index():
    return render_template('AboutUs.html')