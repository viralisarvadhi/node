import url from 'url';

const myURL = new URL('https://example.org');
myURL.pathname= 'a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)

//ouput 
/* username: '',
  password: '',
  host: 'example.org',
  hostname: 'example.org',
  port: '',
  pathname: '/a/b/c',
  search: '?d=e',
  searchParams: URLSearchParams { 'd' => 'e' },
  hash: '#fgh'
}*/