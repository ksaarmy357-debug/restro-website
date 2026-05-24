import os
import requests
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    # System prompt to define the Zestro AI persona
    system_prompt = (
        "You are the AI assistant for Zestro, an ultra-luxurious futuristic Mediterranean restaurant. "
        "Your tone is sophisticated, welcoming, and helpful. You know everything about Zestro's "
        "fusion of Mediterranean flavors and cutting-edge culinary technology. "
        "Keep responses concise and elegant."
    )

    # Check if API key is set to a placeholder or missing
    if not OPENROUTER_API_KEY or OPENROUTER_API_KEY == "your_api_key_here":
        # Return a mock response for demonstration/development
        return jsonify({"response": f"[MOCK RESPONSE] Welcome to Zestro! You asked: '{user_message}'. Our futuristic Mediterranean delights are waiting for you."})

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "google/learnlm-1.5-pro-experimental:free",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message}
        ]
    }

    try:
        response = requests.post(OPENROUTER_URL, headers=headers, json=data)
        response.raise_for_status()
        result = response.json()

        if 'choices' in result and len(result['choices']) > 0:
            ai_message = result['choices'][0]['message']['content']
            return jsonify({"response": ai_message})
        else:
            return jsonify({"response": "I'm sorry, I couldn't process that right now. How else can I assist you at Zestro?"})

    except Exception as e:
        print(f"Error calling OpenRouter: {e}")
        return jsonify({"response": "I'm experiencing a slight technical glitch. However, our Mediterranean hospitality remains flawless. How can I help you?"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
