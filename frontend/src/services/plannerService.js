const API_URL = 'http://localhost:5000/api/planner';

export const submitSurvey = async (answers) => {
    try {
        const response = await fetch (`${API_URL}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error("There was a problem submitting the survey:", error);
        throw error;
    }
};