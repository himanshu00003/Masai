# Weather Fetch App (Debugged Version)

## ✅ Features:
- Retrieves weather details based on a valid city name.  
- Displays **city name, temperature (°C), and weather conditions**.  
- Incorporates **error handling** for invalid city names or API failures.  
- Ensures **user input validation** to prevent empty submissions.  

## 🔧 Fixes & Enhancements:
1. **Resolved API Key Issue**: Updated `"YOUR_API_KEY"` placeholder for OpenWeather API.  
2. **Handled Invalid City Names**: Displays a user-friendly error message for nonexistent locations.  
3. **Added Input Validation**: Prevents empty or whitespace-only submissions.  
4. **Converted Temperature to Celsius**: Appends `units=metric` in the API request.  
5. **Implemented Try-Catch for Errors**: Manages network failures and incorrect responses.  

## 🚀 How It Works:
1. Enter a city name in the input field.  
2. Click the "Get Weather" button.  
3. If the city is valid, weather details are displayed.  
4. If invalid, an error message appears.  

## 🛠 Technologies Utilized:
- **HTML** – Provides page structure.  
- **CSS** – Enhances styling and layout.  
- **JavaScript** – Uses Fetch API, Async/Await, and error handling.  

## 🌍 API Reference:
- [OpenWeather API](https://api.openweathermap.org/data/2.5/weather)

