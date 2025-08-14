from flask import Blueprint, request, jsonify

planner_bp = Blueprint('planner_bp', __name__)

@planner_bp.route('/api/planner/submit', methods=['POST'])
def submit_survey():
    # Gets the JSON data sent from the frontend
    data = request.get_json()

    print("Received survey answers", data)

    dummy_recommendations = [
        {"career": "Software Engineer", "match_score": "95%"},
        {"career": "Data Scientist", "match_score": "88%"},
        {"career": "UX Designer", "match_score": "82%"}
    ]

    return jsonify(dummy_recommendations)