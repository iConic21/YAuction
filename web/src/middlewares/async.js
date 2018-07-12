export default function ({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.then) return next(action);

        action.payload
        .then(response => {
            response.cb = action.payload.cb;
            const newAction = { ...action, payload: response };
            dispatch(newAction);
        })
        .catch(err => { 
            if (err.response) err.response.cb = action.payload.cb;
            const newAction = { ...action, payload: err.response };
            dispatch(newAction); 
        });
    }
}