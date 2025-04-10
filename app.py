from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    section = None
    if request.method == 'POST':
        section = request.form.get('section', '').lower().strip()
    return render_template('index.html', section=section)

if __name__ == '__main__':
    app.run(debug=True)