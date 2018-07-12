export default function ({ dispatch }) {
    return next => action => {
        if (!action.payload || !action.payload.data) return next(action);
        const data = action.payload.data;
        if (data.success){
            if (action.payload.cb && action.payload.cb.success) action.payload.cb.success(data);
            const newAction = { ...action, payload: data.data };
            dispatch(newAction);
        }
        else {
            if (action.payload.cb && action.payload.cb.fail) action.payload.cb.fail(data);
            console.error(data.error);
            return null;
        }
    }
}