


const Friend = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            {
                props.hobbies.map((hobby) => (
                    <li>
                        { hobby}
                </li>
            ))
            }
        </div>
    );
}

export default Friend;