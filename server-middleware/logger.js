export default function (req, res, next) {
    console.group('MIDDLEWARE');
    // Node.js 환경에 있기 때문에 request, response 객체에 액세스 할 수 있다.
    console.log(req.url);
    console.log(res);
    console.groupEnd('MIDDLEWARE');
    next();
}