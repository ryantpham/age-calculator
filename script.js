function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust years and months if necessary
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months = (months + 12) % 12;
    }

    // Adjust days
    if (days < 0) {
        // Borrowing the previous month to adjust the days
        const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = prevMonthLastDay + days;
        months--;

        // Adjust months again in case days adjustment made months negative
        if (months < 0) {
            years--;
            months = 11;
        }
    }

    return { years, months, days };
}

// Example usage:
const birthDateString = '2001-05-03'; // Format: YYYY-MM-DD
const age = calculateAge(birthDateString);
console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
