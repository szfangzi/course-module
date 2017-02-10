const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p><a href="#about">About</a></p>' }
const About = { template: '<p><a href="#">Home</a></p>' }

const routes = {
    '': Home,
    '#about': About
}
export default routes
