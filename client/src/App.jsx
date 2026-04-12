import viteLogo from "./assets/vite.svg";
import reactLogo from "./assets/react.svg";
import terraformLogo from "./assets/logo.png";

import {useEffect, useState} from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("${import.meta.env.VITE_API_URL}/users") // http://localhost:3000/users
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-2 p-6 text-white">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-6">
            <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
            <img src={reactLogo} className="h-14 w-14" alt="React logo" />
          </div>
          <h2>✖️</h2>
          <img src={terraformLogo} className="h-14 w-14" alt="Terraform logo" />
        </div>
        <h2>Data from PSQL Database</h2>
      </section>
      <table className="mx-10 border border-slate-500 text-left text-sm">
        <thead className="bg-slate-700 text-white">
          <tr>
            <th className="border border-slate-500 p-2">ID</th>
            <th className="border border-slate-500 p-2">Name</th>
            <th className="border border-slate-500 p-2">Email</th>
          </tr>
        </thead>
        <tbody className="bg-slate-800">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-slate-500 p-2">{user.id}</td>
              <td className="border border-slate-500 p-2">{user.name}</td>
              <td className="border border-slate-500 p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
