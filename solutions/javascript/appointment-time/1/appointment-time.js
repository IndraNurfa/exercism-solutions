// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const date = now === undefined ? new Date() : new Date(now);
  date.setDate(date.getDate() + days);
  return date;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return new Date(appointmentDate).toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const years = new Date(timestamp).getFullYear();
  const months = new Date(timestamp).getMonth();
  const dates = new Date(timestamp).getDate();
  const hours = new Date(timestamp).getHours();
  const minutes = new Date(timestamp).getMinutes();
  
  return {
    year: years,
    month: months,
    date: dates,
    hour: hours,
    minute: minutes,
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  if (options.year !== undefined) date.setFullYear(options.year);
  if (options.month !== undefined) date.setMonth(options.month);
  if (options.date !== undefined) date.setDate(options.date);
  if (options.hour !== undefined) date.setHours(options.hour);
  if (options.minute !== undefined) date.setMinutes(options.minute);

  return getAppointmentDetails(date.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.ceil((new Date(timestampB) - new Date(timestampA))  / 1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return appointmentTimestamp > currentTimestamp;
}
