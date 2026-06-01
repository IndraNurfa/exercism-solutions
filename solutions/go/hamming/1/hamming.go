package hamming

import "errors"

func Distance(a, b string) (int, error) {
	runeA := []rune(a)
	runeB := []rune(b)

	if len(runeA) != len(runeB) {
		return 0, errors.New("strands must be of equal length")
	}

	cost := 0
	for index := 0; index < len(runeA); index++ {
		if runeA[index] != runeB[index] {
			cost++
		}
	}

	return cost, nil
}
