function CourseDetails() {

  const courses = [
    {
      id: 1,
      name: "React",
      duration: "6 Weeks"
    },
    {
      id: 2,
      name: "Java",
      duration: "8 Weeks"
    },
    {
      id: 3,
      name: "Python",
      duration: "5 Weeks"
    }
  ];

  return (
    <div>

      <h2>Course Details</h2>

      <table border="1" cellPadding="8">

        <thead>
          <tr>
            <th>Course</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>

          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CourseDetails;