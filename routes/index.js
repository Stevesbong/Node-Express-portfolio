
const { projects } = require('../data.json');

// EXPORTS ROUTES
module.exports = app => {

    // RENDER INDEX TEMPLATE AND PASSING IT PROJECTS
    app.get('/', (req, res) => {
        res.render('index', {projects})
    })

    // RENDER ABOUT TEMPLATE
    app.get('/about', (req, res) => {
        res.render('about')
    })

    // PROJECTS ROUTE REDIRECT TO THE ROOT ROUTE
    app.get('/projects', (req, res) => {
        res.redirect('/')
    })

    // GET INDIVIDUAL PROJECT
    app.get('/projects/:id', (req, res, next) => {
        const projectId = req.params.id;

        // FIND PROJECT ID THAT MATCHES 'projectId' FROM PROEJCTS ARRAY
        const project = projects.find( ({ id }) => id === +projectId)
        console.log(project, 'got project')

        // IF FOUND PROJECT, RENDER PROJECT TEMPLATE
        // ELSE CREATE 404 ERROR
        if(project) {
            res.render('project', { project } )
        } else {
            const err = new Error();
            err.status = 404;
            err.message = `Looks like the project you requested doesn't Exist.`;
            next(err)
        }
    })
}