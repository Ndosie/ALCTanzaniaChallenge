const Note = require('../models/note');

exports.createNote = (req, res, next) => {
	const note = new Note({
		userId: req.body.userId,
		title: req.body.title,
		description:req.body.description,
		dateCreated:Date.now(),
		dateUpdated:Date.now()
	});

	note.save().then(
		() => {
			res.status(201).json({
				message: 'Note entered Successfully!'
			});
		}
		).catch(
			(error) => {
				res.status(400).json({
					error:error
				});
			}
		);	
}

exports.modifyNote = (req, res, next) => {
	let note = new Note({_id: req.params._id});
	note = {
		_id: req.params.id,
		userId: req.body.userId,
		title: req.body.title,
		description:req.body.description,
		dateUpdated:Date.now()
	};
	
  	Note.updateOne({_id: req.params.id}, note).then(
	  	() => {
	  		res.status(201).json({
	  			message: 'Note updated Successfully!'
	  		});
	  	}
	).catch(
  		(error) => {
  			res.status(400).json({
  			error: error
  			});
  		}	
	);
}

exports.deleteNote = (req, res, next) => {
	Note.findOne({_id: req.params.id }).then(
		(note) => {
			Note.deleteOne({_id: req.params.id}).then(
			() => {
				res.status(200).json({
					message: 'Note deleted Successfully!'
				});
			}
			).catch(
				(error) => {
					res.status(400).json({
					error: error
					});
				}	
			);
		}
	);
}

exports.getNote = (req, res, next) => {
  Note.findOne({
  	_id: req.params.id
  	}).then(
  	(note) => {
  		res.status(200).json(note);
  	}
  	).catch(
  		(error) => {
  			res.status(404).json({
  			error: error
  			});
  		}	
  	);
}

exports.getAllNotes = (req, res, next) => {
  Note.find().then(
  	(notes) => {
  		res.status(200).json(notes);
  	}
  	).catch(
  		(error) => {
  			res.status(400).json({
  			error: error
  			});
  		}	
  	);
}