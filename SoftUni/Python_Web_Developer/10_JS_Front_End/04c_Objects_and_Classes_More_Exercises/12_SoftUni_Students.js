function softUniStudents(input) {
  const courses = {};

  for (const line of input) {
    if (line.includes(":")) {
      const [courseName, capacity] = line.split(": ");
      if (!courses.hasOwnProperty(courseName)) {
        courses[courseName] = { capacity: Number(capacity), students: [] };
      } else {
        courses[courseName].capacity += Number(capacity);
      }
    } else if (line.includes(" with email ")) {
      const [studentInfo, courseName] = line.split(" joins ");
      const [username, creditsInfo] = studentInfo.split("[");
      const [credits, email] = creditsInfo.split("] with email ");

      if (courses.hasOwnProperty(courseName)) {
        const course = courses[courseName];
        if (course.students.length < course.capacity) {
          course.students.push({ username, credits: Number(credits), email });
        }
      }
    }
  }

  const sortedCourses = Object.entries(courses).sort(
    (a, b) => b[1].students.length - a[1].students.length
  );

  for (const [courseName, course] of sortedCourses) {
    const availableSpots = course.capacity - course.students.length;
    console.log(`${courseName}: ${availableSpots} places left`);

    course.students
      .sort((a, b) => b.credits - a.credits)
      .forEach((student) => {
        console.log(
          `--- ${student.credits}: ${student.username}, ${student.email}`
        );
      });
  }
}
