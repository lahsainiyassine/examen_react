import React from 'react';

function StudentStats({ students = [] }) {
  const total = students.length;

  if (total === 0) {
    return (
      <div className="student-stats">
        <h2>Statistiques</h2>
        <p className="no-students">Aucun étudiant</p>
      </div>
    );
  }

  const sommeNotes = students.reduce(
    (totalCumule, student) => totalCumule + Number(student.note),
    0
  );
  const moyenne = (sommeNotes / total).toFixed(2);

  return (
    <div className="student-stats">
      <h2>Statistiques</h2>
      <div className="stats-content">
        <p>
          Nombre total d'étudiants : <strong>{total}</strong>
        </p>
        <p>
          Moyenne générale des notes : <strong>{moyenne} / 20</strong>
        </p>
      </div>
    </div>
  );
}

export default StudentStats;
