const { projects } = require('../data.json');

module.exports = app => {
    app.get('/', (req, res) => {
        res.render('index', {projects})
    })

    app.get('/about', (req, res) => {
        res.render('about')
    })

    app.get('/projects', (req, res) => {
        res.redirect('/')
    })

    app.get('/projects/:id', (req, res) => {
        const projectId = req.params.id;
        const project = projects.find( ({ id }) => id === +projectId)
        console.log(project, 'got project')
        if(project) {
            res.render('project', { project } )
        }
    })
}