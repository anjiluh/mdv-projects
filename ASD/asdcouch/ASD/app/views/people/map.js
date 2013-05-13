function(doc){
	if (doc._id.substr(0,8) === "contact:"){
		emit(doc._id.substr(8), {
			"fname": 		doc.fname,
			"lname":		doc.lname,
			"cat":			doc.cat,
			"email":		doc.email,
			"favorite":		doc.favorite
		});
	}
};