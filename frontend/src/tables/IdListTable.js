import React from 'react'

const IdListTable = props => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.ids.length > 0 ? (
        props.ids.map((user, index) => (
          <tr key={index}>
            <td>{user.client_id}</td>
            <td>{user.name}</td>
            <td>
              <button
                onClick={() => {
                  props.addRow({ name: user.name })
                }}
                className="button muted-button"
              >
                +
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No name</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default IdListTable
