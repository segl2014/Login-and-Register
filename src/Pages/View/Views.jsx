import React from "react";
import Data from "../../Array";

function Views() {
  return (
    <div className="p-3">
      <table class="table border shadow table-hover  mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.email}</td>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Views;
