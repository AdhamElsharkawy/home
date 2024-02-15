export default function (context) {
    const path = context.route.path;
    // Check if the path starts with /home/ but isn't exactly /home/
    if (path.startsWith('/home/') && path !== '/home/') {
      return context.redirect('/home/');
    }
  }

