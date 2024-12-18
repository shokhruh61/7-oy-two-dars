import React, { useEffect, useState } from "react";
import { backend } from "../axios";
import { use } from "react";
function Api() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    backend("users")
      .then((response) => {
        if (response.status == 200) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 mt-5 pb-2 items-center justify-center">
        {users.length > 0 &&
          users.map((value, index) => {
            return (
              <div
                key={index}
                className="border p-4 w-[400px] rounded-xl bg-black text-white flex flex-col items-center "
              >
                <h1 className="text-2xl font-bold text-white">
                  Name: {value.name}
                </h1>
                <h2 className="text-xl font-medium text-white">
                  Username: {value.username}
                </h2>
                <h5 className="text-base text-white">
                  Email: {value.email}
                </h5>
                <h2 className="text-base text-white">
                  CompanyName: {value.company.name}
                </h2>
                <h6 className="text-base text-white">
                  City: {value.address.city}
                </h6>
                <p className="text-base text-white">Phone: {value.phone}</p>
                {value.website && (
                  <h3>
                    Website:
                    <a
                      href={`http://${value.website}`}
                      target="_blank"
                      className="text-teal-500"
                    >
                      {value.website}
                    </a>
                  </h3>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Api;
