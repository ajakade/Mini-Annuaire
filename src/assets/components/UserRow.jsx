export function UserRow({ user, onSelect }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.city}</td>
      <td>{user.company.name}</td>
      <td>
        <button onClick={() => onSelect(user)}>Voir détails</button>
      </td>
    </tr>
  );
}
