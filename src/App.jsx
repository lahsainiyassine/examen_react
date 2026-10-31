import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import StudentStats from './StudentStats';

const initialStudents = [
  { id: 1, nom: "Alami", prenom: "Sara", note: 15 },
  { id: 2, nom: "Bennani", prenom: "Youssef", note: 12 },
  { id: 3, nom: "Idrissi", prenom: "Hiba", note: 17 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');

  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Application de Gestion des Étudiants</h1>
      </header>

      <main className="app-main">
        <section className="card-section">
          <StudentForm onAddStudent={handleAddStudent} />
        </section>

        <section className="card-section search-section">
          <h2>Rechercher un étudiant</h2>
          <div className="search-group">
            <label htmlFor="search-input">Filtrer par nom :</label>
            <input
              id="search-input"
              type="text"
              placeholder="Tapez un nom pour filtrer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </section>

        <section className="card-section">
          <h2>Liste des étudiants</h2>
          <StudentList
            students={filteredStudents}
            onDelete={handleDeleteStudent}
          />
        </section>

        <section className="card-section">
          <StudentStats students={students} />
        </section>
      </main>
    </div>
  );
}

export default App;
