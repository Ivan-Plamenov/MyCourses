function manageMeetings(input) {
  const meetings = {};
  const successfulMeetings = [];

  input.forEach((meeting) => {
    const [day, name] = meeting.split(" ");

    if (meetings.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  });

  for (const day in meetings) {
    successfulMeetings.push(`${day} -> ${meetings[day]}`);
  }

  console.log(successfulMeetings.join("\n"));
}
