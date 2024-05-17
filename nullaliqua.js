function methodNotAllowed() {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
