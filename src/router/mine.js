const route = {
    path: '/mine',
    component: ()=>import('../views/mine/root'),
    keepAlive: false,
    children: [
    ]
}

export default route;