
function UserList({ users }) {
    const handleClick = async (id) => {
        console.log(id)
    }

    return (
        <div>
            <p>component</p>
            <ul>
                {users.map((user) => (

                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <span onClick={() => handleClick(user.id)}>X</span>
                    </li>

                ))}
            </ul>
        </div >
    )
}

export default UserList