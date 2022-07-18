const route = {
    path: '/home',
    component: ()=>import('../views/home/root'),
    keepAlive: false,
    children: [
    ]
}

export default route;