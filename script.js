'use strict';
document.getElementById('calculate-button').addEventListener('click', function() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  
  const dayError = document.getElementById('day-error');
  const monthError = document.getElementById('month-error');
  const yearError = document.getElementById('year-error');
  
  let valid = true;
  
  // Clear previous error messages
  dayError.textContent = '';
  monthError.textContent = '';
  yearError.textContent = '';
  
  // Validate day
  if (!day) {
      dayError.textContent = 'This field is required';
      valid = false;
  } else if (day < 1 || day > 31) {
      dayError.textContent = 'Must be a valid day';
      valid = false;
  }
  
  // Validate month
  if (!month) {
      monthError.textContent = 'This field is required';
      valid = false;
  } else if (month < 1 || month > 12) {
      monthError.textContent = 'Must be a valid month';
      valid = false;
  }
  
  // Validate year
  if (!year) {
      yearError.textContent = 'This field is required';
      valid = false;
  } else if (year > new Date().getFullYear()) {
      yearError.textContent = 'Must be in the past';
      valid = false;
  }
  
  if (!valid) {
      return;
  }
  
  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  
  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();
  
  if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(year, month, 0).getDate();
  }
  
  if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
  }
  
  document.getElementById('years').textContent = ageYears;
  document.getElementById('months').textContent = ageMonths;
  document.getElementById('days').textContent = ageDays;
  
  // Change the label to "day" if ageDays is 1, otherwise keep it "days"
  const daysLabel = document.getElementById('days-label');
  if (ageDays === 1) {
      daysLabel.textContent = 'day';
  } else {
      daysLabel.textContent = 'days';
  }
});