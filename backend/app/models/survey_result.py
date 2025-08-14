from app import db
from sqlalchemy.dialects.postgresql import JSONB

class SurveyResult(db.Model):
    __tablename__ = 'survey_results'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    answers = db.Column(JSONB, nullable=False)
    recommendations = db.Column(JSONB, nullable=True)

    def __repr__(self):
        return f'<SurveyResult {self.id} for User {self.user_id}>'