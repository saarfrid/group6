from flask import Blueprint, render_template

# home blueprint definition
CreatingSoaps = Blueprint(
    'CreatingSoaps',
    __name__,
    static_folder='static',
    static_url_path='/CreatingSoaps',
    template_folder='templates'
)

# Routes
@CreatingSoaps.route('/CreatingSoaps')
def CreatingSoaps_index():
    return render_template('CreatingSoaps.html')