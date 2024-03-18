
#Stage 1 Creating angular build(dist folder). 
#as node means you are creating an alias for this stage to be accessed in the future stages

FROM node:alpine as node
#Use the below if running unit test cases with Karma
#FROM dockerenthusiast1992/node-karma:1.0.0 as node

LABEL author="Angular Enthusiast"
LABEL description="We aim to deploy the angular app to DockerHub"

WORKDIR /app

#WORKDIR will create the app directory if it doesnt already exist

# node is the base image from which Docker will include all functionality into the image we will be crearting
# Its like a parent class from which we are inheriting all features into the child class
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
#copy all the files and folders from the directory where the Dockerfile is present into the working directory i.e /app
#RUN npm run test

RUN npm run build
#Stage 2

#FROM nginx:alpine
FROM nginx:alpine

#caching files
VOLUME /var/cache/nginx 

RUN rm -r /usr/share/nginx/html/*

#Now I need to access the dist folder from the previous stage. 
# I copy the dist folder into the folder that nginx uses to refer static files.
COPY --from=node /app/dist/shell-application /usr/share/nginx/html/


# to replace the default nginx config file with our config file. In our config file we
# have added an additional check. When we are routing to other components with different paths,
# nginx might think its a server side path and return 404. In such cases we instruct nginx to 
# redirect to index.html file. This is very important
#COPY nginx/nginx.config /etc/nginx/conf.d/
#COPY nginx/nginx.config /etc/nginx/conf.d/default.conf

COPY nginx/nginx.config /etc/nginx/templates/default.conf.template

EXPOSE 80

ADD docker/startup.sh /docker-entrypoint.d/startup.sh
#RUN chmod +x /startup.sh
# the below command ensures ? not appended at the end of filenames
RUN sed -i 's/\r$//' /docker-entrypoint.d/startup.sh
RUN chmod +x /docker-entrypoint.d/startup.sh
#ENTRYPOINT ["sh","/startup.sh"]
#CMD ["nginx", "-g", "daemon off;"] 
#uncomment incase you want to use docker cp
#the command to be executed when the docker container starts. -g daemon off indicates that nginx must run in the foreground
#this command must execute execute successfully. Otherwise you cannot open the application in the browser.