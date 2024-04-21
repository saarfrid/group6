from flask import Blueprint, render_template

# home blueprint definition
FirstPage = Blueprint(
    'FirstPage',
    __name__,
    static_folder='static',
    static_url_path='/FirstPage',
    template_folder='templates'
)

# Routes
@FirstPage.route('/FirstPage')
def FirstPage_index():
    return render_template('FirstPage.html')