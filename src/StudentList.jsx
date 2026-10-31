import React, { useState } from 'react';

const initialStudents = [
  { id: 1, nom: "Alami", prenom: "Sara", note: 15 },
  { id: 2, nom: "Bennani", prenom: "Youssef", note: 12 },
  { id: 3, nom: "Idrissi", prenom: "Hiba", note: 17 }
];

function StudentList({ students: propsStudents, onDelete: propsOnDelete }) {
  const [localStudents, setLocalStudents] = useState(initialStudents);

  const students = propsStudents !== undefined ? propsStudents : localStudents;
  const handleDelete = propsOnDelete !== undefined
    ? propsOnDelete
    : (id) => setLocalStudents(localStudents.filter((student) => student.id !== id));

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty-message">
                Aucun étudiant à afficher
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.nom}</td>
                <td>{student.prenom}</td>
                <td>{student.note}</td>
                <td>
                  <button
                    type="button"
                    className="btn-delete"
                    onClick={() => handleDelete(student.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
