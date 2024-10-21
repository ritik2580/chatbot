// Extended dictionary of diseases and solutions
const diseaseDatabase = {
    "fever": {
        response: "You might be experiencing a viral infection. Drink plenty of fluids, rest, and monitor your temperature. If it exceeds 102°F, consult a physician.",
        keywords: ["fever", "temperature", "sweating", "chills"]
    },
    "cold": {
        response: "Common cold symptoms include sneezing, runny nose, and sore throat. Stay hydrated and rest. Over-the-counter medications can help relieve symptoms.",
        keywords: ["cold", "sneeze", "runny nose", "cough"]
    },
    "headache": {
        response: "Headaches can be caused by stress, dehydration, or eye strain. Drink water, rest, and consider taking a pain reliever.",
        keywords: ["headache", "pain", "throbbing"]
    },
    "diabetes": {
        response: "If you suspect high blood sugar, it's important to consult with a doctor. Monitor your blood sugar levels and maintain a healthy diet.",
        keywords: ["diabetes", "sugar", "thirst", "fatigue"]
    },
    "hypertension": {
        response: "High blood pressure should be managed with proper medication, a low-sodium diet, and regular exercise. Consult your physician for guidance.",
        keywords: ["high blood pressure", "hypertension", "dizziness"]
    },
    "allergies": {
        response: "Allergy symptoms can be treated with antihistamines. Avoid allergens and stay hydrated. If symptoms persist, consult a doctor.",
        keywords: ["allergy", "sneeze", "itchy", "runny nose"]
    },
    "migraine": {
        response: "Migraines are severe headaches. Rest in a dark room, stay hydrated, and avoid triggers like stress or certain foods. Medication can help.",
        keywords: ["migraine", "light sensitivity", "nausea"]
    },
    "stomach pain": {
        response: "Stomach pain may be caused by indigestion or a virus. Stay hydrated, avoid heavy meals, and rest. If the pain persists, seek medical advice.",
        keywords: ["stomach pain", "cramps", "nausea"]
    },
    // Additional diseases can be added here
};

// Greetings and conversational responses
const greetings = [
    "Hello! How can I assist you today?",
    "Hi there! What health concerns do you have?",
    "Greetings! How are you feeling today?"
];

const conversationResponses = {
    "how are you": "I'm just a bot, but I'm here to help you with your health questions!",
    "what can you do": "I can help you understand symptoms and provide general advice for various diseases. Just let me know what you’re experiencing.",
    "hello": "Hi! How can I help you today?",
    "hi": "Hello! What health issue can I assist you with?"
};

// Display a random greeting when the page loads
window.onload = function() {
    const greetingIndex = Math.floor(Math.random() * greetings.length);
    document.getElementById('responseText').innerText = greetings[greetingIndex];
    document.querySelector('.response').style.display = 'block';
};

document.getElementById('getResponseBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.toLowerCase().trim();
    
    // Hide response and show thinking animation
    document.querySelector('.response').style.display = 'none';
    document.querySelector('.thinking').style.display = 'block';

    // Simulate 2-3 seconds delay (thinking animation)
    setTimeout(function() {
        // Hide thinking animation and show response
        document.querySelector('.thinking').style.display = 'none';
        document.querySelector('.response').style.display = 'block';

        // Initialize a variable to track if a match is found
        let foundMatch = false;

        // Check for conversational responses first
        if (conversationResponses[userInput]) {
            foundMatch = true;
            document.getElementById('responseText').innerText = conversationResponses[userInput];
        } else if (diseaseDatabase[userInput]) {
            foundMatch = true;
            document.getElementById('responseText').innerText = `AI Physician Analysis: ${diseaseDatabase[userInput].response}`;
        } else {
            // Check for keyword matches
            for (const disease in diseaseDatabase) {
                const keywords = diseaseDatabase[disease].keywords;
                for (const keyword of keywords) {
                    if (userInput.includes(keyword)) {
                        foundMatch = true;
                        document.getElementById('responseText').innerText = `AI Physician Analysis: ${diseaseDatabase[disease].response}`;
                        break;
                    }
                }
                if (foundMatch) break;
            }
        }

        // Fallback response
        if (!foundMatch) {
            document.getElementById('responseText').innerText = "AI Physician: Sorry, I couldn't find a match for your symptoms. Please provide more details or consult a physician.";
        }
    }, 2500);  // 2.5 seconds delay
});
