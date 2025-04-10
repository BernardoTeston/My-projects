<<<<<<< HEAD
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    section = None
    if request.method == 'POST':
        section = request.form.get('section', '').lower().strip()
    return render_template('index.html', section=section)

if __name__ == '__main__':
=======
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    section = None
    if request.method == 'POST':
        section = request.form.get('section', '').lower().strip()
    return render_template('index.html', section=section)

if __name__ == '__main__':
>>>>>>> cd96b81b5050984da2758d9e9032365616d9b724
    app.run(debug=True)