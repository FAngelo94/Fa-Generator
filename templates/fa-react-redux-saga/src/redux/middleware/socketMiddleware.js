/**
 * Start the connection
 * When data arrive overwrite timestamp send by server (maybe in future it will not happen) and
 * add new field with date
 * @param {*} store 
 */
const socketIOReduxMiddleware = store => next => action => {

	console.log("Middleware")
	return next(action);

};

export default socketIOReduxMiddleware;