/*
 * Reference: https://www.youtube.com/watch?v=ovnyeq-Xxrc
 *
 * Nice library: neverthrow
 *
 */
type Result<S, E extends { reason: string }> = [E, null] | [null, S];

function ok<S>(data: S): Result<S, never> {
  return [null, data];
}

function err<const R extends string, E extends { reason: string }>(
  error: E,
): Result<never, E> {
  return [error, null];
}

function something(input: string) {
  const shouldThrowErr = false;

  if (!shouldThrowErr) {
    return ok("Wake Up, Neo!");
  }

  return err({ reason: `Wake Up, Neo! - ${input}` });
}

function executesSomething(input: string) {
  const [error, data] = something(input);

	if (error) {
		return `Handles error gracefully - ${error.reason}`
	}

	return `Data always here - ${data}`
}
