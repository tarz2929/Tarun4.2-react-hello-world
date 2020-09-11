import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents ()
{
  // Some test values.
  const students = [ "Lindsey", "Ayesha", "Krisztina" ];

  // We could use a counter to make sure our keys will be unique.
  let counter = 0;

  // Create a map (versus an array.)
  const studentsList = students.map(
    studentName => <HelloStudent key={counter++} name={studentName} />
  );

  console.log( studentsList );

  // Return is our "render."
  return (
    <section>
      <h2>Our Hello to Students</h2>
      {studentsList}
    </section>
  );
}

export default HelloStudents;
