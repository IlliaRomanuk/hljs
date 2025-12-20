function Result() {
    const code = `"films": "https://swapi.tech/api/films",
    "people": "https://swapi.tech/api/people",
    "planets": "https://swapi.tech/api/planets",
    "species": "https://swapi.tech/api/species",
    "starships": "https://swapi.tech/api/starships",
    "vehicles": "https://swapi.tech/api/vehicles"
  },
  "apiVersion": "1.0",
  "timestamp": "2025-12-20T17:36:03.626Z",
  "support": {
    "contact": "admin@swapi.tech",
    "partnerDiscounts": {
      "saberMasters": {
        "link": "https://www.swapi.tech/partner-discount/sabermasters-swapi",
        "details": "Use this link to automatically get $10 off your purchase!"
      },
      "heartMath": {
        "link": "https://www.heartmath.com/ryanc",
        "details": "Looking for some Jedi-like inner peace? Take 10% off your heart-brain coherence tools from the HeartMath Institute!"
      }
    }
  },
  "social": {
    "discord": "https://discord.gg/zWvA6GPeNG",
    "reddit": "https://www.reddit.com/r/SwapiOfficial/",
    "github": "https://github.com/semperry/swapi/blob/main/CONTRIBUTORS.md"
  }
}`
    return (
        <div>
        <h2>Result:</h2>
        <pre className="result"><code>{code}</code></pre>
        </div>
    )
}
export default Result;