export default {
    path: "/movie",
    component: () =>
        import ('@/views/movie/Movie'),
    children: [{
            path: "/movie",
            redirect: "/movie/homePlaying"
        },
        {
            path: "city",
            component: () =>
                import ('components/city')
        },
        {
            path: "comingSon",
            component: () =>
                import ('components/comingSon')
        },
        {
            path: "search",
            component: () =>
                import ('components/search')
        },
        {
            path: "homePlaying",
            component: () =>
                import ('components/homePlaying')
        }
    ]
}