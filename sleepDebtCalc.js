let averagePerNight = 0;
let actualSleepTotal = undefined;
let sleepDebt = undefined;

// Limits the numbers input between 0 - 24 (hours)
function handleChange(input) {
  if (input.value <= 0) input.value = 0;
  if (input.value >= 24) input.value = 24;
}

// Calculates the sum of average hours needed * 7
function weeklyRequiredTotal() {
  averagePerNight = document.getElementById("average").valueAsNumber;
  averagePerNight *= 7;
  console.log(averagePerNight);
  document.getElementById(
    "averageTotal"
  ).innerHTML = `${averagePerNight} hours are required each week for healthy sleep.`;
}

// Calculates the sum of all 7 weekday values.
function everyDaySum() {
  monday = document.getElementById("monday").valueAsNumber;
  tuesday = document.getElementById("tuesday").valueAsNumber;
  wednesday = document.getElementById("wednesday").valueAsNumber;
  thursday = document.getElementById("thursday").valueAsNumber;
  friday = document.getElementById("friday").valueAsNumber;
  saturday = document.getElementById("saturday").valueAsNumber;
  sunday = document.getElementById("sunday").valueAsNumber;

  actualSleepTotal =
    monday + tuesday + wednesday + thursday + friday + saturday + sunday;

  console.log(actualSleepTotal);

  // Prints ratio: actual sleep vs average required.
  if (actualSleepTotal > 1) {
    document.getElementById(
      "yourTotal"
    ).innerHTML = `You've slept ${actualSleepTotal} of ${averagePerNight} hours.`;
  }
}

// calculates sleep debt
function totalDebt() {
  let totalDebt = averagePerNight - actualSleepTotal;
  console.log(totalDebt);

  // prints if you need more sleep, have overslept, got the perfect amount of sleep, or an error message.
  if (totalDebt > 0) {
    document.getElementById(
      "sleepDebt"
    ).innerHTML = `Sleep debt accrued: ${totalDebt} hours.`;
  } else if (totalDebt < 0) {
    document.getElementById("sleepDebt").innerHTML = `You've overslept by ${
      actualSleepTotal - averagePerNight
    } hours.`;
  } else if (totalDebt === 0) {
    document.getElementById("sleepDebt").innerHTML =
      "You've got the perfect amount of sleep!";
  } else if (isNaN(totalDebt)) {
    console.log("You must enter a number");
    document.getElementById("sleepDebt").innerHTML =
      "Error: You must enter a number in every field.";
  }
}
