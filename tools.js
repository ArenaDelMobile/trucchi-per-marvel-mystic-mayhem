/**
 * tools - Basic General Purpose Functions
 * Author: ArenaDelMobile
 * License: Custom
 */

const tools = {
    /**
     * Returns the current timestamp in milliseconds.
     * @returns {number}
     */
    now() {
        return Date.now();
    },

    /**
     * Converts a number of seconds to a formatted string HH:MM:SS.
     * @param {number} seconds - Number of seconds.
     * @returns {string}
     */
    formatTime(seconds) {
        if (typeof seconds !== 'number' || seconds < 0) {
            console.error('[tools] Invalid seconds input.');
            return '';
        }
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    },

    /**
     * Clamps a number between a min and max value.
     * @param {number} num - The number to clamp.
     * @param {number} min - Minimum allowed value.
     * @param {number} max - Maximum allowed value.
     * @returns {number}
     */
    clamp(num, min, max) {
        if (typeof num !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
            console.error('[tools] Invalid input. Expected numbers.');
            return NaN;
        }
        return Math.min(Math.max(num, min), max);
    }
};

// Example usage:
// console.log(tools.now()); // Current timestamp
// console.log(tools.formatTime(3661)); // '01:01:01'
// console.log(tools.clamp(15, 0, 10)); // 10

module.exports = tools;
