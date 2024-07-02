import React from 'react'
import delIcon from '../Images/del.png'

const users=[
  {
      "firstName": "John",
      "lastName": "Doe",
      "emailId": "john.doe@example.com",
      "status": "active",
      "satusClass":"bg-green-500/20 text-green-600",
      "registrationDate": "2023-01-15"
  },
  {
      "firstName": "Jane",
      "lastName": "Smith",
      "emailId": "jane.smith@example.com",
      "status": "inactive",
      "satusClass":"bg-red-500/20 text-red-700",
      "registrationDate": "2022-11-25"
  },
  {
      "firstName": "Alice",
      "lastName": "Johnson",
      "emailId": "alice.johnson@example.com",
      "status": "active",
      "satusClass":"bg-green-500/20 text-green-600",
      "registrationDate": "2023-03-30"
  },
  {
      "firstName": "Bob",
      "lastName": "Brown",
      "emailId": "bob.brown@example.com",
      "status": "pending",
      "satusClass":"bg-yellow-500/20 text-yellow-600",
      "registrationDate": "2022-12-10"
  },
  {
      "firstName": "Charlie",
      "lastName": "Davis",
      "emailId": "charlie.davis@example.com",
      "status": "active",
      "satusClass":"bg-green-500/20 text-green-600",
      "registrationDate": "2023-04-12"
  },
  {
      "firstName": "Emily",
      "lastName": "Wilson",
      "emailId": "emily.wilson@example.com",
      "status": "inactive",
      "satusClass":"bg-red-500/20 text-red-700",
      "registrationDate": "2023-02-20"
  }
]

const User = () => {
  return (
    <div>
        <div className="p-6 overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  First Name{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Last Name{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Email Id{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Status{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Registration Date{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
          { users.map(user => {
            return (
              <tr>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {user.firstName}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {user.lastName}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex flex-col">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {user.emailId}
                  </p>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <div className="w-max">
                  <div
                    className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${user.satusClass} bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md`}
                    style={{ opacity: 1 }}
                  >
                    <span className="">{user.status}</span>
                  </div>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                  {user.registrationDate}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                    </svg>
                  </span>
                </button>
                <button
                  className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <img src={delIcon} alt="" />
                  </span>
                </button>
              </td>
            </tr>
            )
            }
          )};
          </tbody>
        </table>
      </div>
      <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
          
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default User



