import webapp2 as webapp
import os
import jinja2


# def render(tpl_path, context = {}):
#     path, filename = os.path.split(tpl_path)
#     return jinja2.Environment(
#         loader=jinja2.FileSystemLoader(path or './')
#     ).get_template(filename).render(context)


class ScriptPage(webapp.RequestHandler):
 
    def get(self):
        self.response.headers['Content-Type']= 'application/x-javascript'
        self.response.write(open('post-store.js').read())

class MainPage(webapp.RequestHandler):
 
    def get(self):
        self.response.headers['Content-Type']= 'text/html'
        self.response.write(open('index.html').read())
 
application = webapp.WSGIApplication([('/', MainPage), ('/post-store.js', ScriptPage)], debug=False)

def main():
    from paste import httpserver
    httpserver.serve(application, host='127.0.0.1', port='8080')

if __name__ == '__main__':
    main()
