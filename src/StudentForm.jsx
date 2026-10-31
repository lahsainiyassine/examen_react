import React, { useState } from 'react';

function StudentForm({ onAddStudent }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom.trim() || !prenom.trim()) {
      setError('Le nom et le prénom sont obligatoires.');
      return;
    }

    if (note === '' || isNaN(Number(note))) {
      setError('Veuillez entrer une note valide.');
      return;
    }

    const noteNumerique = Number(note);
    if (noteNumerique < 0 || noteNumerique > 20) {
      setError('La note doit être comprise entre 0 et 20 inclus.');
      return;
    }

    const nouveauEtudiant = {
      id: Date.now(),
      nom: nom.trim(),
      prenom: prenom.trim(),
      note: noteNumerique
    };

    if (onAddStudent) {
      onAddStudent(nouveauEtudiant);
    }

    setNom('');
    setPrenom('');
    setNote('');
    setError('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Ajouter un étudiant</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          id="nom"
          type="text"
          placeholder="Entrez le nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          id="prenom"
          type="text"
          placeholder="Entrez le prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="note">Note :</label>
        <input
          id="note"
          type="number"
          step="any"
          placeholder="Note sur 20 (0 - 20)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-add">
        Ajouter
      </button>
    </form>
  );
}

export default StudentForm;
