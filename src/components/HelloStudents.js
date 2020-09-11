import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents ()
{
  // Some test values.
  const students = [
    {name:"Lindsey", unit:"Python"},
    {name:"Ayesha", unit:"CSS"},
    {name:"Krisztina", unit:"React"},
  ];

  // We could use a counter to make sure our keys will be unique.
  let counter = 0;

  // Create a map (versus an array.)
  const studentsList = students.map( // Don't forget to have a "key" for any map.
    student => <HelloStudent key={counter++} name={student.name} unit={student.unit} />
  );

  // What does this data look like? We can check, this is JS!
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
