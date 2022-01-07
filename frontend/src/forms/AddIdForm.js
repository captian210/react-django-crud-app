import React, { useState } from 'react'

const AddIdForm = props => {
	const initialFormState = { id: null, name: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name) return
				props.addUser(user)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<button>Add new name</button>
		</form>
	)
}

export default AddIdForm
