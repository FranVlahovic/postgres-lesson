const db = require('../db/queries');

async function getUsernames(req, res){
    const search = req.query.search;
    let usernames;
    
    if(search){
        usernames = await db.searchUsernames(search);
    } else {
        usernames = await db.getAllUsernames();
    }

    res.send('Usernames: ' + usernames.map(user => user.username).join(', '));
};

async function createUsernameGet(req, res){
    res.render('index');
};

async function createUsernamePost(req, res){
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
};

async function deleteUsernames(req, res) {
    await db.deleteAllUsernames();
    res.redirect('/')
}


module.exports = { getUsernames, createUsernameGet, createUsernamePost, deleteUsernames };