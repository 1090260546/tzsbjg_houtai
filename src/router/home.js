const route = {
    path: '/home',
    component: ()=>import('../views/home/root'),
    children: [
    ]
}

export default route;