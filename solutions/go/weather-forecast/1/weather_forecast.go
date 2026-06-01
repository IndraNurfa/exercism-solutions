// Package weather provide checking condition.
package weather

var (
    // CurrentCondition e.g. winter, spring.
	CurrentCondition string
    // CurrentLocation e.g. city.
	CurrentLocation  string
)

// Forecast return a string what the current condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
