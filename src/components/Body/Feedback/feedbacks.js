const Feedbacks = props => {
        return (
            <div>
                <p>Name: {props.name}</p>
                <p>Rating: {props.rating}</p>
                <p>Feedback: {props.comment}</p>
                <hr/>
            </div>
        );
    }        

export default Feedbacks;