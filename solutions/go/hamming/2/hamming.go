package hamming

import "errors"

func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("strands must be of equal length")
	}

	cost := 0
	for i := range len(a) {
		if a[i] != b[i] {
			cost++
		}
	}

	return cost, nil
}
