import React, { useState } from "react";
import axios from "axios";

function Adduser() {
  const [first, setFirst] = useState("");
  const [role, setRole] = useState("");

  const sendData = () => {
   const data = { name: first, job: role};

    axios("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((data) => console.log(data))

    setTimeout(() => {
      alert("Successfully Created")
    }, 500);
  };

  return (
    <div className="p-3 m-5">
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Role
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div class="col-12">
          <button
            class="btn btn-primary mx-5 "
            type="submit"
            onClick={sendData}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Adduser;
