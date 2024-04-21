from flask import Blueprint, render_template

# home blueprint definition
LikedSoaps = Blueprint(
    'LikedSoaps',
    __name__,
    static_folder='static',
    static_url_path='/LikedSoaps',
    template_folder='templates'
)

# Routes
@LikedSoaps.route('/LikedSoaps')
def LikedSoaps_index():
    return render_template('LikedSoaps.html')