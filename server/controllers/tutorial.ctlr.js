const getAllTutorials = (req, res) => {
    res.json({ 'message': 'Getting all the tutorials' })
}


// exporting the functions
module.exports = {
    getAllTutorials
}