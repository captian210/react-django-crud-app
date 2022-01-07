import React, { useState, Fragment, useEffect } from 'react'
import AddIdForm from './forms/AddIdForm'
import IdListTable from './tables/IdListTable'
import { fetchAllListData, addUser } from './api/provider'

const App = () => {
	// Setting state
	const [idList, setIds] = useState([])

	useEffect(() => {
		let response = [];
		const fetchAllListDataTry = async () => {
			try {
				response = await fetchAllListData()
				setIds(response)
			} catch (e) {
				console.log(e)
			}
		}
		fetchAllListDataTry()
	}, []);

	// CRUD operations
	const addId = async obj => {
		const response = await addUser(obj.name)
		setIds(response)
	}

	return (
		<div className="container">
			<div className="flex-column">
				<div className="flex-large">
					<Fragment>
						<h2>Add id</h2>
						<AddIdForm addUser={addId} />
					</Fragment>
				</div>
				<div className="flex-large">
					<h2>View ids</h2>
					<IdListTable ids={idList} addRow={addId} />
				</div>
			</div>
		</div>
	)
}

export default App
