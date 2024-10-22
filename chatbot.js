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
    "hypertension": {
        response: "High blood pressure often has no symptoms, but long-term hypertension can lead to serious complications like heart disease. A low-sodium diet, regular exercise, and prescribed medications can help manage blood pressure. Check your blood pressure regularly and follow up with your doctor."
    },
    "allergies": {
        response: "Common allergy symptoms include sneezing, runny nose, and itchy eyes. Antihistamines can help alleviate symptoms. If you're prone to seasonal allergies, staying indoors during high pollen days and keeping windows closed can reduce exposure."
    },
    "bronchitis": {
        response: "Bronchitis typically presents with a persistent cough, often following a cold. Drinking warm fluids, using a humidifier, and resting can help ease symptoms. If you have difficulty breathing or your symptoms worsen, consult a physician."
    },
    "asthma": {
        response: "Asthma causes difficulty breathing due to airway inflammation. If you're experiencing shortness of breath or wheezing, use your rescue inhaler as prescribed. Long-term control medications can help manage chronic symptoms, but see your doctor if symptoms persist."
    },
    "pneumonia": {
        response: "Pneumonia is a serious lung infection characterized by cough, fever, and difficulty breathing. Rest, fluids, and prescribed antibiotics (if bacterial) are essential for recovery. Seek immediate medical attention if breathing becomes difficult or chest pain worsens."
    },
    "depression": {
        response: "Depression symptoms include persistent sadness, loss of interest in activities, and fatigue. It's important to reach out to a mental health professional for counseling and possible medication. Regular exercise and maintaining social connections can also help improve mood."
    },
    "anxiety": {
        response: "Anxiety can manifest as excessive worry, restlessness, and rapid heart rate. Breathing exercises, mindfulness, and physical activity can help alleviate anxiety symptoms. Consult a mental health professional for therapy or medication options if anxiety persists."
    },
    "sinusitis": {
        response: "Sinusitis often follows a cold and causes facial pain, congestion, and a thick nasal discharge. Steam inhalation, nasal irrigation, and over-the-counter decongestants can help. If symptoms last more than 10 days, consult a doctor for possible antibiotics."
    },
    "flu": {
        response: "Flu symptoms include fever, body aches, and fatigue. Rest, hydration, and over-the-counter fever reducers like acetaminophen can help manage symptoms. Stay home to avoid spreading the virus, and consult a doctor if symptoms worsen or persist."
    },
    "covid-19": {
        response: "COVID-19 symptoms can range from mild to severe and include fever, cough, and difficulty breathing. Isolate yourself from others, stay hydrated, and monitor your oxygen levels if possible. Seek immediate medical attention if you have trouble breathing."
    },
    "urinary tract infection (UTI)": {
        response: "A UTI causes pain during urination, frequent urges to urinate, and cloudy urine. Drink plenty of water, avoid caffeine, and consult your doctor for antibiotics if symptoms worsen."
    },
    "back pain": {
        response: "Back pain is often caused by muscle strain or poor posture. Rest, stretching, and applying heat or cold can help relieve pain. Over-the-counter pain relief may also help. If the pain persists or radiates down your legs, consult a healthcare provider."
    },
    "appendicitis": {
        response: "Appendicitis causes severe pain in the lower right abdomen, often accompanied by fever, nausea, and vomiting. It's a medical emergency, so seek immediate medical attention if you suspect appendicitis."
    },
    "eczema": {
        response: "Eczema causes dry, itchy, and inflamed skin. Moisturizing regularly and avoiding irritants like harsh soaps can help. Topical corticosteroids may be prescribed to reduce inflammation."
    }
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
