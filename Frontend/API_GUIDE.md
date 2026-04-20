# 🌐 APIs & Async JavaScript - Learning Guide

Learn how to fetch real data from the internet!

---

## What is an API?

**API** = Application Programming Interface
Think of it as a **restaurant menu**:
- You order food (request data)
- Chef prepares it (server processes)
- You get food back (receive data)

**Example:** Weather API gives you real Seattle weather

---

## What is Async/Await?

**Async** = Asynchronous (doesn't block other code)

Think of it like:
- Normal: Wash dishes → Wait to dry → Put away (blocking)
- Async: Start dishwasher → Do other things → When done, put away (non-blocking)

```javascript
// Without async: Page freezes while loading data
let weather = fetchWeather()  // BLOCKS HERE

// With async: Page stays responsive
async function getWeather() {
  let weather = await fetchWeather()  // Waits but doesn't block
  console.log(weather)
}
```

---

## How to Fetch Data (3 Steps)

### Step 1: Make a Request
```javascript
fetch('https://api.example.com/data')
```

### Step 2: Wait for Response
```javascript
.then(response => response.json())
```

### Step 3: Use the Data
```javascript
.then(data => console.log(data))
```

---

## Full Example: Get Weather

```javascript
async function getWeather() {
  // 1. Fetch data from weather API
  let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=47.6&longitude=-122.3&current=temperature_2m,weather_code&timezone=auto')
  
  // 2. Convert to JSON (readable format)
  let data = await response.json()
  
  // 3. Extract weather info
  let temp = data.current.temperature_2m
  let condition = data.current.weather_code
  
  return { temp, condition }
}
```

---

## Weather API We'll Use

**Open-Meteo** - Free, no API key needed!

Endpoint:
```
https://api.open-meteo.com/v1/forecast?latitude=47.6&longitude=-122.3&current=temperature_2m,weather_code&timezone=auto
```

Parameters:
- `latitude=47.6` = Seattle's latitude
- `longitude=-122.3` = Seattle's longitude
- `current=temperature_2m,weather_code` = Get current temp and weather code
- `timezone=auto` = Auto-detect timezone

Response example:
```json
{
  "current": {
    "temperature_2m": 65.2,
    "weather_code": 2
  }
}
```

---

## Weather Codes

- 0 = Clear sky
- 1-2 = Mostly clear
- 3 = Overcast
- 45-48 = Foggy
- 51-67 = Drizzle/Rain
- 71-85 = Snow
- 80-82 = Rain showers
- 85-86 = Snow showers

---

## What We'll Build

1. Create `fetchWeather()` function
2. Fetch real Seattle weather data
3. Parse the data
4. Update HTML with weather info
5. Call it when page loads

---

## Key Concepts

✅ `fetch()` = get data from internet
✅ `async/await` = wait for response without blocking
✅ `.json()` = convert text response to usable data
✅ Error handling with try/catch
✅ API parameters and endpoints

Ready to build it? Let's go! 🚀
