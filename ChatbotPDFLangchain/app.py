# import flask
from flask import Flask, request, jsonify
import main
from main import create_vector_db_from_pdf, get_response_from_query
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pdf_text = create_vector_db_from_pdf()

@app.route("/")
def hello_world():
    return "Welcome to Gita Soul Connect!!"

@app.route("/answer_to/", methods=['GET','POST'])
def answer_to():
    answer = None
    if request.method == 'POST':
        user_question = request.form['question'] #query

        answer = get_response_from_query(pdf_text, user_question)
    
    return jsonify({'answer': answer})