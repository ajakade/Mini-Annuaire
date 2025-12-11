import { useFetch } from "./useFetch";
import { useState } from "react";
import { UserRow } from "./UserRow";
import BlackMode from "./BlackMode";

export function Users() {
  //state
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [search, setSearch] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);

  // comportement
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  const filtered = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const onSelect = (user) => {
    setSelectedUser(user);
  };

  //affichage
  return (
    <div>
      <BlackMode />{" "}
      <input
        type="text"
        placeholder="Rechecher un utilisateur"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <UserRow user={user} onSelect={onSelect} />
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="card">
          <h3>{selectedUser.name}</h3>
          <p>Username : {selectedUser.username}</p>
          <p>Email : {selectedUser.email}</p>
          <p>
            Adresse : {selectedUser.address.street},{" "}
            {selectedUser.address.suite}, {selectedUser.address.zipcode}
          </p>
          <p>
            Géolocalisation : {selectedUser.address.geo.lat} ,{" "}
            {selectedUser.address.geo.lng}
          </p>
          <p>
            Entreprise : {selectedUser.company.name} — "
            {selectedUser.company.catchPhrase}
          </p>
          <p>Site : {selectedUser.website}</p>
        </div>
      )}
    </div>
  );
}
