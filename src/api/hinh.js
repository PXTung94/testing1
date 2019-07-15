export function gethinh(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve({
                image: 'https://previews.123rf.com/images/krisdog/krisdog1606/krisdog160600018/57729127-an-illustration-of-a-japanese-samurai-warrior-standing-and-holding-two-swords.jpg?fbclid=IwAR1rjiJ1wcjA4k01RHWs7H0NIObs7tNuNmCxT2p4MirEHYc6qOSmn2GU6ZA',
                share: 'https://www.facebook.com/profile.php?id=100034312733015'
            })
        }, 3000);
    });
}