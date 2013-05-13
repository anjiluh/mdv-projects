function(doc){
	if (doc._id.substr(0,8) === "contact:"){
		emit(doc._id);
	}
};